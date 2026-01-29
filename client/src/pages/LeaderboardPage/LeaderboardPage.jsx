import { useEffect, useState } from 'react';
import style from './LeaderboardPage.module.css';
import { Link } from 'react-router';

function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState([]);
  const API_URL = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    fetch(`${API_URL}/leaderboard`, {
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLeaderboard(data);
      });
  }, [API_URL]);

  return (
    <div className={style.leaderboards}>
      <Link to={'/'}>Go back to home</Link>
      <br />
      Top Players:
      {leaderboard.leaderboard &&
        leaderboard.leaderboard.map((player, index) => {
          return (
            <p key={index}>
              {index + 1}: {player.name} --- {player.timeDisplay}
            </p>
          );
        })}
    </div>
  );
}

export default LeaderboardPage;
