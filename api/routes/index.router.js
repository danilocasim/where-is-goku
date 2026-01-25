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

indexRouter.get('/deleteChar', (req, res) => {
  req.session.user.chars.pop();
  res.json({ user: req.session.user });
});

indexRouter.get('/get-session', (req, res) => {
  res.json({ user: req.session.user });
});

indexRouter.post('/checkCoordinates', indexController.checkCoordinates);

export default indexRouter;
