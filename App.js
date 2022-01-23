import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import CharacterProfile from "./CharacterProfile";


function App() {
  const [characterInfo, setCharacterInfo] = useState([
    {id: uuidv4(),cName:'Aran' ,pName:'FeelSpacial', mStat:20000, showStat:false},
    {id: uuidv4(),cName:'Luminous' ,pName:'CoolGuy', mStat:55000, showStat:false},
    {id: uuidv4(),cName:'Night Lord' ,pName:'SpecialDd12312', mStat:45000, showStat:false},
    {id: uuidv4(),cName:'Kain' ,pName:'FishyMan123', mStat:35000, showStat:false},
  ]);

  function toggleStat(id){
    const showStat = [...characterInfo];
    const selectedChar = showStat.find(person => person.id === id);
    selectedChar.showStat = !selectedChar.showStat;
    setCharacterInfo(showStat);
  }

  return (
      <CharacterProfile characterInfo={characterInfo} toggleStat={toggleStat}/>
  );
}

export default App;
