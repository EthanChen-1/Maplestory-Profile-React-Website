import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import CharacterProfile from "./CharacterProfile";
import CharacterForm from "./CharacterForm";
import './App.css';

const localstoragekey = "blahkey123";

function App() {
  const [characterInfo, setCharacterInfo] = useState([
    {id: uuidv4(),cName:'Aran' ,pName:'FeelSpacial', mStat:20000, showStat:false},
    {id: uuidv4(),cName:'Luminous' ,pName:'CoolGuy', mStat:55000, showStat:false},
    {id: uuidv4(),cName:'Night Lord' ,pName:'SpecialDd12312', mStat:45000, showStat:false},
    {id: uuidv4(),cName:'Kain' ,pName:'FishyMan123', mStat:35000, showStat:false},
  ]);

  useEffect(()=>{
    const storedItems = JSON.parse(localStorage.getItem(localstoragekey));
    setCharacterInfo(storedItems);
  },[])

  useEffect(()=>{
    localStorage.setItem(localstoragekey, JSON.stringify(characterInfo));
  },[characterInfo]);

  function toggleStat(characterId){
    const showStat = [...characterInfo];
    const selectedChar = showStat.find(person => person.id === characterId);
    selectedChar.showStat = !selectedChar.showStat;
    setCharacterInfo(showStat);
  }

  function addNewCharacter(newCharacter){
    newCharacter = {...newCharacter, id: uuidv4()};
    setCharacterInfo((prevCharList)=>{
        return([...prevCharList, newCharacter]);
    })
  }

  function removeCharacter(characterId){
      setCharacterInfo((prevCharList) =>{
        let updatedList = prevCharList.filter((thing) => thing.id !== characterId)
        return updatedList;
      })
  }

  return (
      <div>
        <CharacterForm onAddCharacter={addNewCharacter}/>
        <CharacterProfile characterInfo={characterInfo} toggleStat={toggleStat} onDelete={removeCharacter}/>
      </div>
      
  );
}

export default App;
