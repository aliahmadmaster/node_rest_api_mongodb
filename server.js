require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const port = 3000;

mongoose.connect(process.env.Database_URL, { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", (error) => {
  console.log(error);
});
db.once("open", () => {
  console.log("Connected to Database");
});

app.use(express.json());

const subscriberRouter = require("./routers/subscribers");

app.use("/subscribers", subscriberRouter);

app.listen(port, () => {
  console.log("server started");
});
