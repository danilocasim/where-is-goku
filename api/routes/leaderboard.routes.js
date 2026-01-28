import leaderboardController from '../controllers/leaderboard.controller.js';

import { Router } from 'express';

const leaderboardRouter = Router();

leaderboardRouter.post('/', leaderboardController.addPlayer);
leaderboardRouter.get('/', leaderboardController.getLeaderboard);

export default leaderboardRouter;
