import React, {useState} from 'react'
import {Provider} from '../Context';
import {CharacterInput} from '../CharInput';
import {CharacterList} from '../CharList';
import '../../assets/main.css'


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
      <div className="container text-center mx-auto">
        <div className="flex flex-row justify-center text-2xl divide-x divide-black">
          <h1 className="px-4">Roll</h1>
          <h1 className="px-4">Character (class)</h1>
          <h1 className="px-4">Turn Options</h1>
        </div>
        <div className="divide-y divide-black">
          <CharacterList />
        </div>
        <CharacterInput />
      </div>
    </Provider>
  );
}

export default App;
