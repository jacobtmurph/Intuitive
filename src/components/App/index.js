import React, {useState} from 'react'
import logo from '../../logo.svg';
import {Provider} from '../Context';
import './App.css';

const App = () => {
  const [characters, setCharacters]= useState([]);

  const addCharacter = (newCharacter) => {
    return setCharacters(characters => [...characters, newCharacter]);
  }
  
  
  return (
    <Provider value={{
      chars: characters,
      actions: {
        addChar: addCharacter,
      }
    }}>
      <div>
      </div>
    </Provider>
  );
}

export default App;
