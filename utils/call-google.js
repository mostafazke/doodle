const request = require("request-promise");

const callGoogle = async (year, month) => {
  return await request.get(
    `https://www.google.com/doodles/json/${year}/${month}?hl=en`
  );
};

module.exports = callGoogle;
