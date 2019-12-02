import express from 'express';
import bodyParser from 'body-parser';

import primes from './prime.js';

const app = express()
const PORT = 8080

app.use(bodyParser.json())

app.post('/prime', (req, res) => {
  const primeMedian = primes(req.body.maxInt)
  res.json(primeMedian)
  console.log(primeMedian);
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))

module.exports = app;
