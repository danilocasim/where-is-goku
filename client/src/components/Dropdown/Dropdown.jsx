import { useContext } from 'react';
import style from './Dropdown.module.css';
import { CharacterContext } from '../../contexts/CharacterContext';

function Dropdown({ posX, posY, xStyle, yStyle, setPos }) {
  const API_URL = 'http://localhost:8000/api/v1';

  const { characters, setCharacters } = useContext(CharacterContext);
  function checkCoordinates(name) {
    fetch(`${API_URL}/checkCoordinates`, {
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify({
        name: name,
        coordinateX: posX,
        coordinateY: posY,
      }),
      method: 'POST',
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCharacters(data.session.user.chars);
        setPos(null);
      });
  }

  return (
    <nav
      className={style.dropdown}
      style={{ top: yStyle + 'px', left: xStyle + 'px' }}
    >
      {characters &&
        characters.map((char) => {
          return <button onClick={() => checkCoordinates(char)}>{char}</button>;
        })}
    </nav>
  );
}

export default Dropdown;
