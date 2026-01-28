import { Outlet } from 'react-router';
import Navigation from './components/Navigation/Navigation';
import style from './App.module.css';
import { useEffect, useState } from 'react';
import { CharacterContext } from './contexts/CharacterContext';

function App() {
  const [characters, setCharacters] = useState([]);
  const API_URL = 'http://localhost:8000/api/v1';

  useEffect(() => {
    fetch(`${API_URL}/set-session`, {
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.message.user.chars);
      });
  }, []);

  return (
    <CharacterContext value={{ characters, setCharacters }}>
      <div className={style.container}>
        <Navigation></Navigation>
        <Outlet />
      </div>
    </CharacterContext>
  );
}

export default App;
