"use strict";
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

var allowedOrigins = ["https://example.com"];
/* var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Operation not allowed'))
    }
  }
} */

const app = express();

app.use(helmet());
/* app.use(cors(corsOptions)); */

module.exports = app;
