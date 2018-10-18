const express = require("express");
const app = express();

const obj = [
  {
    name: "Zdzisiek",
    age: 26
  },
  {
    name: "Franek",
    age: 29
  }
];

app.get("/api/dane", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.send(obj);
});

app.listen(3000, () => console.log("Listening on port 5001..."));
