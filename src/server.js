const express = require('express');
const app = express();

// New route added
app.get('/home', (req, res) => {
  res.send('Welcome to the CI/CD Home!');
});

// Updated existing route
app.get('/', (req, res) => {
  res.send('Hello CI/CD World!');
});

// New /data route added
app.get('/data', (req, res) => {
  res.json({
    message: "dummy message",
    data: ["dummy data"]
  });
});

module.exports = app;
