const express = require('express');
const error = require('./middlewares/error');

const getAll = require('./controllers/megasena');

require('dotenv').config()

const app = express();

app.use(express.json());

const { PORT } = process.env || 3000;

app.get('/megasena', getAll)

app.use(error);

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
