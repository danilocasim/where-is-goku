import db from '../queries/leaderboard.queries.js';

class Leaderboard {
  async addPlayer(req, res) {
    const { name, timeDisplay, finishedBySec } = req.body;

    const player = await db.addPlayer(name, timeDisplay, finishedBySec);

    res.json({ success: 'true', player });
  }

  async getLeaderboard(req, res) {
    const leaderboard = await db.getLeaderboard();

    res.json({ leaderboard });
  }
}

export default new Leaderboard();
