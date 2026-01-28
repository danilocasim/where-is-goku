import { useState } from 'react';
import style from './AddPlayerToLeaderboard.module.css';

function AddPlayerToLeaderboard({ setShowAddPlayer, finishedSec }) {
  const API_URL = 'http://localhost:8000/api/v1';
  const [name, setName] = useState('');
  function time_convert(time) {
    const hours = Math.floor(time / 3600);
    time = time - hours * 3600;
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;

    return (
      (String(hours).length == 1 ? `0${hours}` : hours) +
      ':' +
      (String(minutes).length == 1 ? `0${minutes}` : minutes) +
      ':' +
      (String(seconds).length == 1 ? `0${seconds}` : seconds)
    );
  }

  function addPlayer(e) {
    e.preventDefault();

    const displayTime = time_convert(Math.round(finishedSec));

    fetch(`${API_URL}/leaderboard`, {
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify({
        name: name,
        timeDisplay: displayTime,
        finishedBySec: finishedSec,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  return (
    <form className={style.form}>
      <input type='name' onChange={(e) => setName(e.target.value)} />
      <button
        onClick={(e) => {
          addPlayer(e);
          setShowAddPlayer(false);
        }}
      >
        Add Player{' '}
      </button>
    </form>
  );
}

export default AddPlayerToLeaderboard;
