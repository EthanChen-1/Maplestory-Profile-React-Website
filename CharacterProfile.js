import React from 'react';
import Character from './Character';

export default function CharacterProfile({characterInfo, toggleStat, onDelete}) {
  if(characterInfo.length === 0){
    return <h1>This List is Empty AF</h1>
  }
  return (
    characterInfo.map(character => {
      return (
        <Character key={character.id} character={character} toggleStat={toggleStat} onDelete={onDelete}/>
      )
    })
  )
}

