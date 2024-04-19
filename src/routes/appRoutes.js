const express = require("express");
const { index } = require("../controllers/appController.js");

const router = express.Router();

router.get("/", index);

module.exports = {
  routes: router,
};
