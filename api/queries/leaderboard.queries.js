import { prisma } from '../lib/prisma.js';

class Leaderboard {
  async addPlayer(name, timeDisplay, finishedBySec) {
    return await prisma.leaderboard.create({
      data: {
        name: name,
        timeDisplay: timeDisplay,
        finishedBySec: finishedBySec,
      },
    });
  }

  async getLeaderboard() {
    return await prisma.leaderboard.findMany({
      orderBy: {
        finishedBySec: 'asc',
      },
    });
  }
}

export default new Leaderboard();
