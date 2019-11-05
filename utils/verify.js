const { verify } = require('jsonwebtoken');
const config = require('./secrets');
module.exports = async (req, res, next) => {
  var token = req.headers['x-access-token'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

  verify(token, config.SECRET, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    next();
  });
};
