//const express = require("express");
import express from "express";
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello, world! Update baslkfah");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log("env port: ", process.env.PORT);
});
