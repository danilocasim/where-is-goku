import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import indexRouter from './routes/index.router.js';
import session from 'express-session';
import { PrismaSessionStore } from '@quixo3/prisma-session-store';
import { PrismaClient } from './generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';
import leaderboardRouter from './routes/leaderboard.routes.js';
const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const app = express();

const whitelist = ['http://localhost:5173' /** other domains if any */];
const corsOptions = {
  httpOnly: true,
  secure: true,
  sameSite: 'none',
  credentials: true,
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.set('trust proxy', true);

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, // Cookie expiration: 1 day
    },
    secret: 'a santa at nasa',
    resave: false,
    saveUninitialized: false,
    store: new PrismaSessionStore(new PrismaClient({ adapter }), {
      checkPeriod: 2 * 60 * 1000, //ms
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
  })
);

app.use('/api/v1', indexRouter);
app.use('/api/v1/leaderboard', leaderboardRouter);

app.get('/destroy-session', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
      res.send('Error destroying session');
    } else {
      res.send('Session destroyed');
    }
  });
});
const PORT = 8000;
app.listen(PORT, (err) => {
  if (err) throw err;
  else console.log(`The server is running at http://localhost:${PORT}`);
});
