const express = require("express");
const { chart } = require("../controllers/appController.js");

const router = express.Router()

router.get("/", chart);

module.exports = {
    routes: router
}