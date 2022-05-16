const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
require("dotenv").config();

//import routes
const authRoutes = require("./routes/auth");

//APP
const app = express();

//DB
mongoose
  .connect(process.env.DATABASE, {})
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Error => ", err));

//MIDDLEWARES
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

//ROUTES_MIDDLEWARE
// app.use("/api", authRoutes);
fs.readdirSync("./routes").map((route) =>
  app.use("/api", require("./routes/" + route))
);

//PORT
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
