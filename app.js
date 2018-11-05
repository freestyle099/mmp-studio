const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const keys = require("./config/keys");
const nodemailer = require("nodemailer");
const path = require("path");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to mongoDB..."))
  .catch(err => console.log(new Error("Colud not connect to mongoDB", err)));

const imageSchema = new mongoose.Schema({
  url: String
});

const Image = mongoose.model("Images", imageSchema);
const Jubiler = mongoose.model("Jubilers", imageSchema);
const Fotobudka = mongoose.model("Fotobudkas", imageSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api/images", async (req, res) => {
  const images = await Image.find();
  res.send(images);
});
app.get("/api/jubilers", async (req, res) => {
  const jubilers = await Jubiler.find();
  res.send(jubilers);
});
app.get("/api/fotobudkas", async (req, res) => {
  const fotobudkas = await Fotobudka.find();
  res.send(fotobudkas);
});
app.get("/api/images/:id", async (req, res) => {
  const images = await Image.find({ id: req.params.id });
  res.send(images);
});

app.post("/contact", (req, res) => {
  console.log(req.body);

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: keys.username,
      pass: keys.password
    }
  });

  let mailOptions = {
    from: `${req.body.firstName} ${req.body.surname} <${req.body.email}>`,
    to: "freestyle09@freestyle09.usermd.net", // list of receivers
    cc: `${req.body.firstName} ${req.body.surname} <${req.body.email}>`,
    subject: `Wiadomość - ${req.body.from}`, // Subject line
    text: "Hello world", // plain text body
    html: "Imię: " + req.body.firstName + "\n" + "Nazwisko: " + req.body.surname
  };

  transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
      throw err;
    }
    console.log(info);
  });
});

// Production
// app.use(express.static("client/build"));
//
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
