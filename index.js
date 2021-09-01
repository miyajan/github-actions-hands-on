const express = require("express");
const fizzbuzz = require("./lib/fizzbuzz");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, beautiful World!\n");
});

app.get("/fizzbuzz", (req, res) => {
  const value = parseInt(req.query.value, 10);
  res.send(`${fizzbuzz(value)}\n`);
});

const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
