import style from './Dropdown.module.css';

function Dropdown({ posX, posY, xStyle, yStyle, setPos }) {
  const API_URL = 'http://localhost:8000/api/v1';

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
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPos(null);
      });
  }

  return (
    <nav
      className={style.dropdown}
      style={{ top: yStyle + 'px', left: xStyle + 'px' }}
    >
      <button onClick={() => checkCoordinates('Goku')}>Goku</button>
      <button onClick={() => checkCoordinates('Mojo Jojo')}>Mojo Jojo</button>
      <button onClick={() => checkCoordinates('Leonardo')}>Leonardo</button>
    </nav>
  );
}

export default Dropdown;
