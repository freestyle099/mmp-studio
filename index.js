const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hi There!");
});

app.get("/api/dane", (req, res) => {
  res.send([{ id: 1, name: "Franek" }, { id: 2, name: "Jontek" }]);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
