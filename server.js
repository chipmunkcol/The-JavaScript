const express = require('express');
const app = express();
const port = 8080;

const router = express.Router();
require('dotenv').config();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", process.env.DB_HOST);
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

app.get('/', (req, res) => {
  res.send('hello, express!')
});

app.get('/api', (req, res) => {
  const result = {};

  try {
    result.result = true;
  } catch (err) {
    console.log(err);
    result.result = false;
  }

  res.send(result);
});

app.listen(port, () => {
  console.log(`listening on ${port}`)
});