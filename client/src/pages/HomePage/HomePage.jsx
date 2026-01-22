import { useRef } from 'react';
import robotCity from '../../assets/robot-city.webp';
import style from './HomePage.module.css';

function HomePage() {
  const elementRef = useRef(null);
  return (
    <img
      ref={elementRef}
      onClick={(event) => {
        let rect = elementRef.current.getBoundingClientRect();
        console.log(rect);
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;

        const xs = x / rect.width;
        const ys = y / rect.height;
        console.log('Coordinate x: ' + x, 'Coordinate y: ' + y);
        console.log(xs, ys);
      }}
      className={style.photo}
      src={robotCity}
      alt='robot city'
    />
  );
}

export default HomePage;
