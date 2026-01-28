import { useContext } from 'react';
import style from './Navigation.module.css';
import { CharacterContext } from '../../contexts/CharacterContext';

function Navigation() {
  const { characters } = useContext(CharacterContext);
  return (
    <nav className={style.nav}>
      <div>Robot City</div>
      <div className={style.characters}>
        {characters &&
          characters.map((char) => {
            return <p>{char}</p>;
          })}
      </div>
      <div>Timer</div>
    </nav>
  );
}

export default Navigation;
