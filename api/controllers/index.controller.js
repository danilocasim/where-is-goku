import db from '../queries/index.queries.js';

class Index {
  async checkCoordinates(req, res) {
    const { name, coordinateX, coordinateY } = req.body;
    if (await db.checkCoordinates(name, coordinateX, coordinateY)) {
      if (req.session.user.chars.includes(name)) {
        const index = req.session.user.chars.indexOf(name);
        req.session.user.chars.splice(index, 1);
      }
      if (req.session.user.chars.length === 0) {
        req.session.user.end = new Date();
      }

      res.json({ success: true, session: req.session });
    } else {
      res.json({ success: false, session: req.session });
    }
  }
}

export default new Index();
