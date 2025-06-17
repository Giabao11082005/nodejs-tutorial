//const express = require("express");
import express from "express";
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello, world! Update");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
