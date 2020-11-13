import React, {useState} from 'react'
import '../CharList'
import {Provider} from '../Context';
import CharacterList from '../CharList';


const App = () => {
  // Set the inital state of the characters available to an empty array. 
  const [characters, setCharacters]= useState([
    {
      name: 'Ilamin',
      characterClass: 'Warlock',
      roll: 15,
    },
    {
      name: 'Therelor',
      characterClass: 'Wizard',
      roll: 5,
    },
  ]);

  // Append new character to the characters array.
  const addCharacter = (charName, charClass, initiativeRoll) => {
    return setCharacters(characters => {
      return [...characters, 
              {
                name: charName,
                characterClass: charClass,
                roll: initiativeRoll,
              }]
    });
  }
  
  
  return (
    <Provider value={{
      chars: characters,
      actions: {
        addChar: addCharacter,
      }
    }}>
      <CharacterList />
    </Provider>
  );
}

export default App;
