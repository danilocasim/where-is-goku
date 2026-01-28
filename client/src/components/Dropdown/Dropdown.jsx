import { useContext } from 'react';
import style from './Dropdown.module.css';
import { CharacterContext } from '../../contexts/CharacterContext';

function Dropdown({
  posX,
  posY,
  xStyle,
  yStyle,
  setPos,
  setShowAddPlayer,
  setFinishedPlayer,
}) {
  const API_URL = 'http://localhost:8000/api/v1';

  const { characters, setCharacters, setStopInterval } =
    useContext(CharacterContext);

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
        if (data.session.user.chars.length === 0) {
          setStopInterval(true);
          setShowAddPlayer(true);
          setFinishedPlayer(data.session.user);
          alert('Congrats!');
        }
        alert(data.success ? 'Correct' : 'Wrong');
        setCharacters(data.session.user.chars);
        setPos(null);
        setFinishedPlayer(data.session.user);
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
