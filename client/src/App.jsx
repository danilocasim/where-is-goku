import { Outlet } from 'react-router';
import Navigation from './components/Navigation/Navigation';
import style from './App.module.css';
import { useEffect, useState } from 'react';
import { CharacterContext } from './contexts/CharacterContext';

function App() {
  const [showAddPlayer, setShowAddPlayer] = useState(false);
  const [characters, setCharacters] = useState([]);
  const API_URL = 'http://localhost:8000/api/v1';
  const [secondsPassed, setSecondsPassed] = useState(1);
  const [stopInterval, setStopInterval] = useState(false);

  function setSession() {
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
  }

  useEffect(() => {
    setSession();
  }, []);

  useEffect(() => {
    let timer = () => {
      setSecondsPassed((sp) => sp + 1);
    };

    if (!stopInterval) timer = setInterval(timer, 1000);

    if (stopInterval) return clearInterval(timer);

    return () => clearInterval(timer);
  }, [stopInterval]);

  return (
    <CharacterContext
      value={{
        characters,
        setCharacters,
        secondsPassed,
        setStopInterval,
        setSession,
        setSecondsPassed,
        showAddPlayer,
        setShowAddPlayer,
      }}
    >
      <div className={style.container}>
        <Navigation></Navigation>
        <Outlet />
      </div>
    </CharacterContext>
  );
}

export default App;
