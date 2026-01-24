import { prisma } from '../lib/prisma.js';

class Index {
  async checkCoordinates(name, coordinateX, coordinateY) {
    const characterCoordinates = await prisma.character.findUnique({
      where: {
        name: name,
      },
      include: {
        coordinates: true,
      },
    });

    if (
      characterCoordinates.coordinates.top_axis_y <= Number(coordinateY) &&
      Number(coordinateY) <= characterCoordinates.coordinates.bot_axis_y &&
      characterCoordinates.coordinates.left_axis_x <= Number(coordinateX) &&
      Number(coordinateX) <= characterCoordinates.coordinates.right_axis_x
    ) {
      return true;
    } else return false;
  }
}

export default new Index();
