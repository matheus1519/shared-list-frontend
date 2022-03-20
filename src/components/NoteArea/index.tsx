/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, useEffect, useState } from "react"
import io from 'socket.io-client';

import { Container } from "./styles"

import { api } from '@/services/api'

interface INoteAreaProps{
  
}

export const NoteArea: React.FC<INoteAreaProps> = ({}) => {
  const backendUrl = process.env.REACT_APP_API_BACKEND || ''

  const [note, setNote] = useState('')
  

  useEffect(() => {
    const loadInitialNotes = async () => {
      try {
        const { data } = await api.get('/notes')

        setNote(data.note)
      }catch( error ){
        console.log(error);
      }
    }

    loadInitialNotes()
  }, []);
  // let navigate = useNavigate();

  useEffect(() => {
    const socket = io(backendUrl);

    socket.on('newNotes', newNote => {
      setNote(newNote)
    })
  }, []);
  
  const onChangeNote = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNote(event.target.value)
    
    try {
      api.post('/notes', { note: event.target.value })
    } catch( error ){
      console.log(error);
    }
  }

  return (
    <Container>
      <textarea value={note} onChange={onChangeNote}/>
    </Container>
  )
}


