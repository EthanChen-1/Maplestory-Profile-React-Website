import React from 'react';
import Character from './Character';

export default function CharacterProfile({characterInfo, toggleStat}) {

  return (
    characterInfo.map(character => {
      return (
        <Character key={character.id} character={character} toggleStat={toggleStat}/>
      )
    })
  )
}

