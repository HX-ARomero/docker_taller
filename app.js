const express = require("express");
const app = express();
const axios = require("axios");
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hola Mundo!!!");
});

app.get("/api", async (req, res) => {
  const users = await axios.get("https://rickandmortyapi.com/api/character");
  const usersData = users.data.results.map((user) => {
    return {
      name: user.name,
      email: user.species,
    };
  });
  res.json(usersData);
});
