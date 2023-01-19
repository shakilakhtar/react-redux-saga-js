import React from 'react';
import Main from './features/product/Main';
import Cart from './features/product/Cart';
import Header from './features/product/Header';


import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path= "/" element ={<Main/>} />
        <Route path= "/cart" element ={<Cart/>} />

      </Routes>
      </div>
  );
}

export default App;
