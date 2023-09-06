import './scss/style.scss';
import React, { useState, useEffect } from 'react';
import Player from "./components/player";

function App() {

  const [rolled, setRoll] = useState(false);
  const [trigger, setTrigger] = useState(0);
  const [numOfPlayers, setNOP] = useState(0);
  
  return (
    <div className="App">
      <div className='game'>

      { 
      Array.from({ length: numOfPlayers }).map((_, index) => (
        <Player trigger={trigger} key={index} />
      ))
      }

        {numOfPlayers < 4  && rolled === false ? (
          <button className='addPlayerBtn' onClick={ () => { setNOP((prevNum) => {
            return ++prevNum;
          })}}>Add Player</button>
        ) : ''}
      </div>
      {numOfPlayers > 1 && rolled === false ? (
        <button className='roll-btn'  onClick={() => {
          setTrigger((trigger) => trigger + 1);
          setRoll(true);
        }}>Roll</button>
      ) : ''}
      { rolled === true ? (
        <a className='roll-btn' href='/'>Reset</a>
      ) : ''}
      {/* <Player />
      <Player />
      <Player />
      <Player /> */}
    </div>
  );
}

export default App;
