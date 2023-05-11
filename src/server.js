const express = require('express');
const app = express();
const port = 8080;

const router = express.Router();

app.get('/', (req, res) => {
  res.send('hello, express!')
});

app.use('/api', router);

router.get('/express', (req, res) => {
  const result = {};

  try {
    result.result = true;
  } catch (err) {
    console.log(err);
    result.result = false;
  }

  res.send(result);
})

app.listen(port, () => {
  console.log(`listening on ${port}`)
});