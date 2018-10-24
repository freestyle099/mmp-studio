const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to mongoDB..."))
  .catch(err => console.log(new Error("Colud not connect to mongoDB", err)));

const imageSchema = new mongoose.Schema({
  url: String
});

const Image = mongoose.model("Images", imageSchema);


app.get("/", (req, res) => {
  res.send("Hi There!");
});

app.get("/api/images",async (req, res) => {
  const images = await Image.find();
  res.send(images);
});
app.get("/api/images/:id",async (req, res) => {
  const images = await Image.find({ id: req.params.id});
  res.send(images);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
