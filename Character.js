import React from 'react';
import './Character.css';

export default  function Character({character, toggleStat, onDelete}) {
  function handleToggle(){
    console.log("handle toggle");
    toggleStat(character.id);
  }


  function handleDelete(){
    onDelete(character.id);
  }

  return (
  <div>
    <div className="character">
      <label>
        <input type="checkbox" checked={character.showStat} onChange={handleToggle}></input>
        IGN: {character.pName}
        {character.showStat? <p>Main Stat: {character.mStat}</p> : null}
      </label>
      <div>
        {character.cName}
      </div>
      <button onClick={handleDelete}>Delete Character</button>
    </div>
  </div>
  )
}


