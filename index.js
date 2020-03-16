const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const doodle = require("./routes/doodle");
const auth = require("./routes/auth");
const config = require("./utils/secrets");
const verify = require("./utils/verify");

// IMPORT MODELS

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.json());
app.use(cors());
// proxy(app);
//IMPORT ROUTES
app.get("/api/doodle/:year/:month", verify, doodle);
app.get("/api/auth", auth);

if (config.ENVIRONMENT === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(config.PORT, () => {
  console.log(`app running on port ${config.PORT}`);
});
