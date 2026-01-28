import { useContext } from 'react';
import style from './Navigation.module.css';
import { CharacterContext } from '../../contexts/CharacterContext';
import { Link } from 'react-router';
function Navigation() {
  const {
    characters,
    secondsPassed,
    setSession,
    setSecondsPassed,
    setShowAddPlayer,
    setStopInterval,
  } = useContext(CharacterContext);

  function time_convert(time) {
    const hours = Math.floor(time / 3600);
    time = time - hours * 3600;
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;

    return (
      (String(hours).length == 1 ? `0${hours}` : hours) +
      ':' +
      (String(minutes).length == 1 ? `0${minutes}` : minutes) +
      ':' +
      (String(seconds).length == 1 ? `0${seconds}` : seconds)
    );
  }

  return (
    <nav className={style.nav}>
      <div>
        <Link to={'/leaderboard'}> View Leaderboard</Link>
      </div>

      <button
        onClick={() => {
          setSession();
          setSecondsPassed(0);
          setShowAddPlayer(false);
          setStopInterval(false);
        }}
      >
        Reset
      </button>
      <div className={style.characters}>
        {characters &&
          characters.map((char, index) => {
            return <p key={index}>{char}</p>;
          })}
      </div>
      <div>
        Time: {!secondsPassed && '00:00:00'}
        {secondsPassed != 0 && time_convert(secondsPassed)}
      </div>
    </nav>
  );
}

export default Navigation;
