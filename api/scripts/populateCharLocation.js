import { prisma } from '../lib/prisma.js';

async function main() {
  const NAME = 'Leonardo';
  const TOP_AXIS_Y = 0.40034988130351895;
  const BOT_AXIS_Y = 0.4341113702019642;
  const LEFT_AXIS_X = 0.6009349309548117;
  const RIGHT_AXIS_X = 0.6224275965826662;

  //   await prisma.character.create({
  //     data: {
  //       name: NAME,
  //       coordinates: {
  //         create: {
  //           top_axis_y: TOP_AXIS_Y,
  //           bot_axis_y: BOT_AXIS_Y,
  //           left_axis_x: LEFT_AXIS_X,
  //           right_axis_x: RIGHT_AXIS_X,
  //         },
  //       },
  //     },
  //   });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
