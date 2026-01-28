import { useState } from 'react';
import style from './AddPlayerToLeaderboard.module.css';

function AddPlayerToLeaderboard({ setShowAddPlayer }) {
  const API_URL = 'http://localhost:8000/api/v1';
  const [name, setName] = useState('');

  function addPlayer(e) {
    e.preventDefault();

    fetch(`${API_URL}/leaderboard`, {
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify({
        name: name,
      }),
      credentials: 'include',
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
