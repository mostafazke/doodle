const { sign } = require('jsonwebtoken');
const config = require('../utils/secrets');
module.exports = async (req, res) => {
  const token = await sign('hello world!', config.SECRET);
  res.send(token);
};
