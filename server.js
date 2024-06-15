const express = require("express");
const app = express();

const collectibles = [
  { name: "shiny ball", price: 5.95 },
  { name: "autographed picture of a dog", price: 10 },
  { name: "vintage 1970s yogurt SOLD AS-IS", price: 0.99 },
];

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

app.get("/collectibles/:number", (req, res) => {
  const number = req.params.number;

  if (isNaN(number)) {
    res.send("You must specify a number.");
  }

  const collectible = collectibles[number];
  if (collectible === undefined) {
    res.send("This item is not yet in stock. Check back soon!");
  } else {
    res.send(
      `So, you want the ${collectible.name}? For ${collectible.price}, it can be yours!`
    );
  }
});

app.listen(3000);
