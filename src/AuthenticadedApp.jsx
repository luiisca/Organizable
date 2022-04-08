import React, {useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import {useGlobalContext} from './context/GlobalProvider';
import BoardProvider from "./context/BoardProvider";

import Home from './components/Home';
import Board from './pages/Board';

const AuthenticatedApp = () => {
  console.log('AuthenticatedApp');

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/boards" element={<Home />} />
      <Route path="/boards/:id" element={<BoardProvider><Board /></BoardProvider>} />
    </Routes>
  );
};

export default AuthenticatedApp;
