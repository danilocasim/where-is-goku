import { useRef, useState } from 'react';
import robotCity from '../../assets/robot-city.webp';
import Dropdown from '../../components/Dropdown/Dropdown';

import style from './Gameboard.module.css';

function Gameboard() {
  const [pos, setPos] = useState(null);
  const elementRef = useRef(null);
  return (
    <div>
      {pos && <Dropdown posX={pos.x} posY={pos.y}></Dropdown>}
      <img
        ref={elementRef}
        onClick={(event) => {
          let rect = elementRef.current.getBoundingClientRect();
          console.log(rect);
          let x = event.clientX - rect.left;
          let y = event.clientY - rect.top;
          const xs = x / rect.width;
          const ys = y / rect.height;

          if (!pos) {
            setPos({ x: x, y: y });
          } else {
            console.log(pos);
            setPos(null);
          }
          console.log('Coordinate x: ' + x, 'Coordinate y: ' + y);
          console.log(xs, ys);
        }}
        className={style.photo}
        src={robotCity}
        alt='robot city'
      />
    </div>
  );
}

export default Gameboard;
