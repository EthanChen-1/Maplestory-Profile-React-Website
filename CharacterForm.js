import React, { useState } from 'react';
import './CharacterForm.css';

export default function CharacterForm({onAddCharacter}) {
    const [characterName, setCharacterName] = useState("");
    const [playerName, setPlayerName] = useState("");
    const [mainStat, setMainStat] = useState("");

    function characterNameHandler(e){
        setCharacterName(e.target.value);
    }

    function playerNameHandler(e){
        setPlayerName(e.target.value);
    }

    function mainStatHandler(e){
        setMainStat(e.target.value);
    }

    function submitHandler(e){
        e.preventDefault();
        const characterData ={
            cName: characterName,
            pName: playerName,
            mStat: mainStat
        }
        onAddCharacter(characterData);
        setCharacterName('');
        setPlayerName('');
        setMainStat('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Character Name:</label>
                <input type="text" value={characterName} onChange={characterNameHandler}></input>
            </div>
            <div>
                <label>Player Name:</label>
                <input type="text" value={playerName} onChange={playerNameHandler}></input>
            </div>
            <div>
                <label>Main Stat:</label>
                <input type="text" value={mainStat} onChange={mainStatHandler}></input>
            </div>
            <div>
                <button type="submit">Submit Character</button>
            </div>
        </form>
    );
}
