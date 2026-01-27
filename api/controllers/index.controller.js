import db from '../queries/index.queries.js';

class Index {
  async checkCoordinates(req, res) {
    const { name, coordinateX, coordinateY } = req.body;
    if (await db.checkCoordinates(name, coordinateX, coordinateY)) {
      if (req.session.user.chars.includes(name)) {
        const index = req.session.user.chars.indexOf(name);
        req.session.user.chars.splice(index, 1);
      }
      res.json({ message: 'Correct', session: req.session });
    } else {
      res.json({ message: 'Wrong', session: req.session });
    }
  }
}

export default new Index();
