import React from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import { NoteArea } from './components/NoteArea';

import {GlobalStyles } from './styles/GlobalStyles'


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NoteArea />} />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
}

