const request = require('request');
const Doodle = require('../models/Doodle');

module.exports = async (req, res) => {
  res.header('Content-Type', 'application/json');
  let doodles = await Doodle.find({ year: req.params.year, month: req.params.month });
  //   console.log('doodles =>', doodles);

  if (doodles.length) return res.send(doodles);
  try {
    request.get(
      `https://www.google.com/doodles/json/${req.params.year}/${req.params.month}?hl=en`,
      async (error, response, body) => {
        if (error) return res.send(error);
        const result = JSON.parse(body);
        result.forEach(async element => {
          const doodle = new Doodle({
            year: req.params.year,
            month: req.params.month,
            ...element
          });
          await doodle.save(err => {
            if (err) {
              return res.send(err);
            }
          });
        });
        doodles = await Doodle.find({
          year: req.params.year,
          month: req.params.month
        });
        return res.send(doodles);
      }
    );
  } catch (error) {
    return res.send(error.message);
  }
};
