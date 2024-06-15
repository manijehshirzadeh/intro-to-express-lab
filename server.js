const express = require("express");
const app = express();

app.get("/greetings/:username", (req, res) => {
  const username = req.params.username;
  res.send(`Hello there, ${username}!`);
});

app.get("/roll/:number", (req, res) => {
  const number = req.params.number;

  if (isNaN(number)) {
    res.send("You must specify a number.");
  }

  const randomWholeNumber = Math.floor(Math.random() * number);
  res.send(`You rolled a ${randomWholeNumber}`);
});

app.listen(3000);
