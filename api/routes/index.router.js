import indexController from '../controllers/index.controller.js';

import { Router } from 'express';

const indexRouter = Router();

indexRouter.get('/sessions', (req, res) => {
  res.json({ message: 'Lol' });
});

indexRouter.post('/checkCoordinates', indexController.checkCoordinates);

export default indexRouter;
