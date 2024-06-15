const express = require("express");
const app = express();

const collectibles = [
  { name: "shiny ball", price: 5.95 },
  { name: "autographed picture of a dog", price: 10 },
  { name: "vintage 1970s yogurt SOLD AS-IS", price: 0.99 },
];

const shoes = [
  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" },
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

app.get("/shoes", (req, res) => {
  const minPrice = req.query["min-price"];
  const maxPrice = req.query["max-price"];
  const type = req.query.type;
  let response = shoes;
  if (minPrice) {
    response = response.filter((shoe) => shoe.price > minPrice);
  }
  if (maxPrice) {
    response = response.filter((shoe) => shoe.price < maxPrice);
  }
  if (type) {
    response = response.filter((shoe) => shoe.type === type);
  }
  res.send(response);
});

app.listen(3000);
