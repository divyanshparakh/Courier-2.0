var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  next(new Error("Welcome To Server "));
});

module.exports = router;
