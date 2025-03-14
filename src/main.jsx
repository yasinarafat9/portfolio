import './index.css'

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Main from './pages/Main';
import Home from './pages/Home/Home';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path='/' element={<Home />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);