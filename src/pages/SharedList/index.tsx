import React, { ChangeEvent, useEffect, useState } from 'react'
import io from 'socket.io-client'

import { Container, Item } from './styles'

import { api } from '@/services/api'

interface ItemState {
  name: string
  checked: boolean
}

export const SharedList: React.FC = () => {
  const backendUrl = process.env.REACT_APP_API_BACKEND || ''

  const [list, setList] = useState([] as ItemState[])
  const [item, setItem] = useState('')

  useEffect(() => {
    const loadInitialNotes = async () => {
      try {
        const { data } = await api.get('/list')

        setList(data.list)
      } catch (error) {
        console.log(error)
      }
    }

    loadInitialNotes()
  }, [])
  // let navigate = useNavigate();

  useEffect(() => {
    const socket = io(backendUrl)

    socket.on('newList', newList => {
      setList(newList)
    })
  }, [])

  console.log(list)

  const onChangeItem = (event: ChangeEvent<HTMLInputElement>) => {
    setItem(event.target.value)
  }

  const addItem = () => {
    if (!item) {
      return
    }

    try {
      api.post('/item', { item })
    } catch (error) {
      console.log(error)
    }

    setItem('')
  }

  const onChangeDoneTask = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    try {
      api.put('/item', {
        index,
        checked: event.target.checked
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <div>
        <h1>Lista Compartilhada</h1>
        {list.length
          ? <ul>
          {list.map((item, index) =>
          <Item key={index} checked={item.checked}>
            <li>{item.name}</li>
            <input type="checkbox" checked={item.checked} onChange={(event) => onChangeDoneTask(event, index)} />
          </Item>
          )}
          </ul>
          : <h4>Nenhum item na lista</h4>
        }
        <input placeholder="Digite um item..." type="text" value={item} onChange={onChangeItem}/>
        <button type="submit" onClick={addItem}>Adicionar</button>
      </div>
    </Container>
  )
}
