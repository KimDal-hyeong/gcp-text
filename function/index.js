const express = require('express');

const app = express();

app.get('*', (req, res) => {
  res.send(200, `<h1>${process.env.MY_VARIABLE}</h1>`)
});

module.exports = app;
