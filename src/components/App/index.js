import React, {useState} from 'react'
import {Provider} from '../Context';
import {CharacterInput} from '../CharInput';
import {CharacterList} from '../CharList';


const App = () => {
  // Set the inital state of the characters available to an empty array. 
  const [characters, setCharacters]= useState([]);

  // Append new character to the characters array.
  const addCharacter = (charObject) => {
    return setCharacters(currentCharacters => ([...currentCharacters, charObject]));
  }
  
  
  return (
    <Provider value={{
      chars: characters,
      addChar: addCharacter,
    }}>
      <CharacterList />
      <CharacterInput />
    </Provider>
  );
}

export default App;
