import wb from './Components/Assets/wb.svg';
import bb from './Components/Assets/bb.svg';
import './App.css';
import ScrollButton from './Components/Buttons/scrollButton'
import Board from './Components/Board/firstgen'
import { Fragment } from 'react';
import { Content, Header } from './Components/Buttons/btnstyles';
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
        <ScrollButton/>
        <Board/>
      </header>
    </div>
  );
}


export default App;
