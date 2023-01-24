const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo is connected"))
  .catch((err) => console.log("DB Connection error", err));

const port = process.env.PORT || 8080;

const server = app.listen(port, () => console.log(`server is running ${port}`));
