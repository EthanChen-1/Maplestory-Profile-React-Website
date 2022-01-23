import React from 'react';
import './Character.css';

export default  function Character({character, toggleStat}) {
  function handleToggle(){
    console.log("handle toggle");
    toggleStat(character.id);
  }
  return (
  <div className='character'>
    <label>
      <input type="checkbox" checked={character.showStat} onClick={handleToggle}></input>
      IGN: {character.pName}
      {character.showStat? <h2>Main Stat: {character.mStat}</h2> : null}
    </label>
    <div>
      {character.cName}
    </div>
  </div>
  )
}


