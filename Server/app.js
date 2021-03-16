var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var helmet = require("helmet");
var compression = require("compression");
var rateLimit = require("express-rate-limit");
var {body, check} = require("express-validator");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(cors());
app.use(compression());
app.use(helmet());

app.use("/", indexRouter);
app.use("/users", usersRouter);

//  Limiting the Connections
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5 // 5 requests,
});

app.use(limiter);

app.use(function() {
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var error = new Error("404 Page Not Found");
  error.status = 404;
  next(error);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};
  //
  // // render the error page
  // res.render('error');
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get("env") === "development" ? err : {}
  });
});

module.exports = app;
