const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const indexRouter = require("./routes/index");
const cors = require("cors");

require("dotenv").config();

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

//  Connect to DB
const db = process.env.MONGO_URI;
// Mongo whitelist

var dbOptions = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: false,
  useCreateIndex: true
};
// Connect to MongoDB
mongoose
  .connect(db, dbOptions)
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Cors
const whitelist = [
  "https://jaybenaim.github.io",
  "http://localhost:3000",
  "http://localhost:5000",
  "http://localhost:5000"
];

const corsOptions = {
  credentials: true,
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};

// app.use(cors(corsOptions));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.resolve(__dirname, "build")));

app.use("/api", indexRouter);
app.get("/", (req, res) => {
  res.send("/home");
});
// app.get("*", (req, res) => {
//   res.sendFile("build/index.html", { root: __dirname });
// });

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// TODO Web Template Studio: Add your own error handler here.
if (process.env.NODE_ENV === "production") {
  // Do not send stack trace of error message when in production
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send("Error occurred while handling the request.");
  });
} else {
  // Log stack trace of error message while in development
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    console.log(err);
    res.send(err.message);
  });
}

module.exports = app;
