import { useContext, useRef, useState } from 'react';
import robotCity from '../../assets/robot-city.webp';
import Dropdown from '../../components/Dropdown/Dropdown';

import style from './Gameboard.module.css';
import AddPlayerToLeaderboard from '../../components/AddPlayerToLeaderboard/AddPlayerToLeaderboard';
import { CharacterContext } from '../../contexts/CharacterContext';

function Gameboard() {
  const [pos, setPos] = useState(null);
  const elementRef = useRef(null);
  const { showAddPlayer, setShowAddPlayer } = useContext(CharacterContext);

  return (
    <div className={style.container}>
      {showAddPlayer && (
        <AddPlayerToLeaderboard
          setShowAddPlayer={setShowAddPlayer}
        ></AddPlayerToLeaderboard>
      )}
      {pos && (
        <Dropdown
          posX={pos.x}
          posY={pos.y}
          xStyle={pos.xStyle}
          yStyle={pos.yStyle}
          setPos={setPos}
          setShowAddPlayer={setShowAddPlayer}
        ></Dropdown>
      )}
      <img
        ref={elementRef}
        onClick={(event) => {
          let rect = elementRef.current.getBoundingClientRect();
          console.log(rect);
          let x = event.clientX - rect.left;
          let y = event.clientY - rect.top;
          const xPosRelativeToWidth = x / rect.width;
          const yPosRelativeToHeight = y / rect.height;

          if (!pos) {
            setPos({
              x: xPosRelativeToWidth,
              y: yPosRelativeToHeight,
              xStyle: x,
              yStyle: y,
            });
          } else {
            setPos(null);
          }
          console.log('Coordinate x: ' + x, 'Coordinate y: ' + y);
          console.log(xPosRelativeToWidth, yPosRelativeToHeight);
        }}
        className={style.photo}
        src={robotCity}
        alt='robot city'
      />
    </div>
  );
}

export default Gameboard;
