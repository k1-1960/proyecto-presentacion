import * as React from 'react';
import { NextUIProvider, Spacer } from '@nextui-org/react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';

import Navbar from './partials/Navbar';

import './app.css';

export default function App() {
  return (
    <NextUIProvider>
      <HashRouter>
        <Navbar></Navbar>
        <Spacer y={12}></Spacer>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </HashRouter>
    </NextUIProvider>
  );
}
