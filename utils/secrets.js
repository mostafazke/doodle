const MONGODB_URI = process.env['MONGODB_URI'] || 'mongodb://localhost:27017/doodle';
const PORT = process.env['PORT'] || 5000;
const SECRET = process.env['SESSION_SECRET'] || 'SECRET';
const ENVIRONMENT = process.env['NODE_ENV'] || 'development';

module.exports = {
  MONGODB_URI,
  PORT,
  SECRET,
  ENVIRONMENT
};
