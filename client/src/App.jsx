import { Outlet } from 'react-router';
import Navigation from './components/Navigation/Navigation';
import style from './App.module.css';
import { useEffect, useState } from 'react';

function App() {
  const [characters, setCharacters] = useState([]);
  console.log(characters);

  const API_URL = 'http://localhost:8000/api/v1';

  useEffect(() => {
    fetch(`${API_URL}/sessions`, {
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data, '2');
        setCharacters(data.message.user.chars);
      });
  }, []);

  return (
    <div className={style.container}>
      <Navigation></Navigation>
      <Outlet />
    </div>
  );
}

export default App;
