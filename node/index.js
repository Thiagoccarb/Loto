const express = require('express');
const error = require('./middlewares/error');
const readFile = require('./helpers/readFile');

const app = express();
app.use(express.json());

const PORT = '3000';

app.get('/', async (req, res, next) => {
  try {
    const file = await readFile('./sorteios.json')
    res.status(200).json(file);
  } catch (err) {
    next({ statusCode: 400,content: err.message })
  }
});

app.use(error);

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
