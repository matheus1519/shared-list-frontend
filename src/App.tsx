import React from 'react'

import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'

import { SharedList } from './pages/SharedList'

import { GlobalStyles } from './styles/GlobalStyles'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedList />} />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  )
}
