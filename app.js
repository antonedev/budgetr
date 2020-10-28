const express = require("express");
const mongoose = require("mongoose");

const app = express();

const router = require("./router");

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

const db = mongoose.connection;

app.use(express.static("public"));
app.use("/", router);

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  app.listen(process.env.PORT, () => {
    console.log("budgetr started");
  });
});
