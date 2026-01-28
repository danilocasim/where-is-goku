import indexController from '../controllers/index.controller.js';

import { Router } from 'express';

const indexRouter = Router();

indexRouter.get('/set-session', (req, res) => {
  req.session.user = {
    name: 'Anonymous',
    chars: ['Goku', 'Leonardo', 'Mojo Jojo'],
    start: new Date(),
  };

  res.json({ message: req.session });
});

indexRouter.post('/checkCoordinates', indexController.checkCoordinates);

export default indexRouter;
