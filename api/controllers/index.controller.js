import db from '../queries/index.queries.js';

class Index {
  async checkCoordinates(req, res) {
    const { name, coordinateX, coordinateY } = req.body;

    if (await db.checkCoordinates(name, coordinateX, coordinateY)) {
      res.json({ message: 'Correct' });
    } else {
      res.json({ message: 'Wrong' });
    }
  }
}

export default new Index();
