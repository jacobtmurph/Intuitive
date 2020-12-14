import React, {useState} from 'react'
import { Consumer } from '../Context';

export const CharacterInput = () => {
    const [charData, setCharData] = useState({});

    const handleDataChange = e => {
        return setCharData(currentData => ({...currentData, [e.target.name]: `${e.target.value}`,}));
    }

    return (
        <Consumer>
            {context => (
                <form onSubmit={e => {e.preventDefault(); context.addChar(charData);
                                     e.target.reset();}}>
                    <label htmlFor="charName">Character Name:</label>
                    <input required="required" name="charName" onChange={handleDataChange} placeholder="Enter character name..."></input>
                    <label htmlFor="charClass">Class:</label>
                    <select required="required" name="charClass" onChange={handleDataChange}>
                        <option>Choose a class.</option>
                        <option value="Artificer">Artificer</option>
                        <option value="Barbarian">Barbarian</option>
                        <option value="Bard">Bard</option>
                        <option value="Blood Hunter">Blood Hunter</option>
                        <option value="Cleric">Cleric</option>
                        <option value="Druid">Druid</option>
                        <option value="Fighter">Fighter</option>
                        <option value="Monk">Monk</option>
                        <option value="Paladin">Paladin</option>
                        <option value="Ranger">Ranger</option>
                        <option value="Rogue">Rogue</option>
                        <option value="Sorcerer">Sorcerer</option>
                        <option value="Warlock">Warlock</option>
                        <option value="Wizard">Wizard</option>
                    </select>
                    <label htmlFor="roll">Roll:</label>
                    <input required="required" name="roll" onChange={handleDataChange}></input>
                    <button type="submit">Add Character</button>
                </form>
            )}
        </Consumer>
    )
}