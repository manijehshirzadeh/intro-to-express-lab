const express = require("express");
const app = express();

app.get("/greetings/:username", (req, res) => {
  const username = req.params.username;
  res.send(`Hello there, ${username}!`);
});
app.listen(3000);
