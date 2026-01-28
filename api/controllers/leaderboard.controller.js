import db from '../queries/leaderboard.queries.js';

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

class Leaderboard {
  async addPlayer(req, res) {
    const { name } = req.body;
    console.log(req.session);

    const seconds =
      (new Date(`${req.session.user.end}`).getTime() -
        new Date(`${req.session.user.start}`).getTime()) /
      1000;

    const timeDisplay = time_convert(Math.round(seconds));

    console.log(seconds, timeDisplay);
    const player = await db.addPlayer(name, timeDisplay, seconds);

    res.json({ success: 'true', player });
  }

  async getLeaderboard(req, res) {
    const leaderboard = await db.getLeaderboard();

    res.json({ leaderboard });
  }
}

export default new Leaderboard();
