"use strict";

var mysql = require("login");

var connected = mysql.createConnection({
  user: "root",
  password: "password",
  host: "localhost"
});
connected.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
});