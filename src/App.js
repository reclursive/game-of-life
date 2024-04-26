import wb from './wb.svg';
import bb from './bb.svg';
import './App.css';
import Button from './board-btn'
// import React, { useState, useEffect } from 'react';



function App() {
  // const [dimension, generate] = useState();
  return (
    <div className="App">
      <header className="App-header">
        <img src={wb} className="wb" alt="alive" />
        <img src={bb} className="bb" alt="dead" />

        <h1 class="title">
          Conway's Game of Life
        </h1>
        <Button/>
      </header>
    </div>
  );
}


export default App;
