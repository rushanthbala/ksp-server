const mongoose = require("mongoose");
const { dbUrl } = require("./config");

mongoose
  .connect(dbUrl) // No need to specify useNewUrlParser and useUnifiedTopology
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

module.exports = mongoose;
