const express = require("express");
const { index } = require("../controllers/appController.js");

const router = express.Router();

router.route("/").get(index);

module.exports = {
  routes: router,
};
