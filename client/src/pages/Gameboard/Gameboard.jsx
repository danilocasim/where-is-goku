import { useRef, useState } from 'react';
import robotCity from '../../assets/robot-city.webp';
import Dropdown from '../../components/Dropdown/Dropdown';

import style from './Gameboard.module.css';

function Gameboard() {
  const [pos, setPos] = useState(null);
  const elementRef = useRef(null);
  return (
    <div className={style.container}>
      {pos && <Dropdown posX={pos.x} posY={pos.y}></Dropdown>}
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
            setPos({ x: xPosRelativeToWidth, y: yPosRelativeToHeight });
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
