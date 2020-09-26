if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const index = require("./routes/index");
// const { mongoURL } = require("./keys");
const mongoose = require("mongoose");

mongoose.connect(process.env.mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log("Connected to mongoose"));
db.once("open", () => console.log("connected to mongoDB"));

app.use(express.static("piblic"));
app.use("/", index);

app.listen(process.env.PORT || 3000);
