import React from 'react'
import {Character} from '../Character'
import {Consumer} from '../Context'

const CharacterList = () => (
    <Consumer>
        { context => (
            <React.Fragment>
                {context.chars.sort((char1, char2) => char1.roll - char2.roll)
                .map((char, index) => {
                    return <Character name={char.name} charClass={char.characterClass} 
                            turnOrder={index + 1} roll={char.roll} />
                })
                }
            </React.Fragment>
        )}
    </Consumer>
)

export default CharacterList