import React from 'react'
import {Character} from '../Character'
import {Consumer} from '../Context'

export const CharacterList = () => (
    <Consumer>
        { context => (
            <React.Fragment>
                {/*
                 Sort the list of characters by descending roll, display each Character in the list 
                 */}
                {context.chars.sort((char1, char2) => parseInt(char2.roll) - parseInt(char1.roll))
                .map((char, index) => {
                    return <Character key={`${char.charName}-${char.roll}`} name={char.charName} charClass={char.charClass} 
                            turnOrder={index + 1} roll={char.roll} />
                })
                }
            </React.Fragment>
        )}
    </Consumer>
)
