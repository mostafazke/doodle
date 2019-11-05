const Doodle = require("../models/Doodle");
const callGoogle = require("../utils/call-google");

module.exports = async (req, res) => {
  res.header("Content-Type", "application/json");
  let doodles = await Doodle.find({
    year: req.params.year,
    month: req.params.month
  });

  if (doodles.length) {
    res.send(doodles);
    const response = await callGoogle(req.params.year, req.params.month);
    const result = JSON.parse(response);
    if (result.length > doodles.length) {
      const data = new Set(...doodles, ...result);
      data.forEach(async element => {
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
      return data;
    }
    return;
  }
  const data = await getNewData(req.params.year, req.params.month);
  return res.send(data);
};

const getNewData = async (year, month) => {
  try {
    const response = await callGoogle(year, month);
    const result = JSON.parse(response);

    result.forEach(async element => {
      const doodle = new Doodle({
        year,
        month,
        ...element
      });
      await doodle.save(err => {
        if (err) {
          return res.send(err);
        }
      });
    });
    doodles = await Doodle.find({
      year,
      month
    });
    return doodles;
  } catch (error) {
    return error;
  }
};
