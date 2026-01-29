import { prisma } from '../lib/prisma.js';

async function main() {
  const leanardo = 'Leonardo';
  const Leonardo_TOP_AXIS_Y = 0.40034988130351895;
  const Leonardo_BOT_AXIS_Y = 0.4341113702019642;
  const Leonardo_LEFT_AXIS_X = 0.6009349309548117;
  const Leonardo_RIGHT_AXIS_X = 0.6224275965826662;

  const goku = 'Goku';
  const Goku_TOP_AXIS_Y = 0.6267910780544034;
  const Goku_BOT_AXIS_Y = 0.662869258664064;
  const Goku_LEFT_AXIS_X = 0.6425415080777253;
  const Goku_RIGHT_AXIS_X = 0.6689369925644862;

  await prisma.character.create({
    data: {
      name: leanardo,
      coordinates: {
        create: {
          top_axis_y: Leonardo_TOP_AXIS_Y,
          bot_axis_y: Leonardo_BOT_AXIS_Y,
          left_axis_x: Leonardo_LEFT_AXIS_X,
          right_axis_x: Leonardo_RIGHT_AXIS_X,
        },
      },
    },
  });

  await prisma.character.create({
    data: {
      name: goku,
      coordinates: {
        create: {
          top_axis_y: Goku_TOP_AXIS_Y,
          bot_axis_y: Goku_BOT_AXIS_Y,
          left_axis_x: Goku_LEFT_AXIS_X,
          right_axis_x: Goku_RIGHT_AXIS_X,
        },
      },
    },
  });

  const Mojo = 'Mojo Jojo';
  const Mojo_TOP_AXIS_Y = 0.442314723319055;
  const Mojo_BOT_AXIS_Y = 0.470114854507354;
  const Mojo_LEFT_AXIS_X = 0.2131174862398666;
  const Mojo_RIGHT_AXIS_X = 0.2418063786183102;

  await prisma.character.create({
    data: {
      name: Mojo,
      coordinates: {
        create: {
          top_axis_y: Mojo_TOP_AXIS_Y,
          bot_axis_y: Mojo_BOT_AXIS_Y,
          left_axis_x: Mojo_LEFT_AXIS_X,
          right_axis_x: Mojo_RIGHT_AXIS_X,
        },
      },
    },
  });
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
