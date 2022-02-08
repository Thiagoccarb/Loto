const getDraws = require('../services/megasena');

const getAll = async (req, res, next) => {
  try {
    const data = await getDraws();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: 'internal_error' })
  }
};

module.exports = getAll;