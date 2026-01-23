import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('LOL');
});

const PORT = 8000;
app.listen(PORT, (err) => {
  if (err) throw err;
  else console.log(`The server is running at http://localhost:${PORT}`);
});
