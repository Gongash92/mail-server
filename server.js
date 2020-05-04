const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/public/index.html");
});

app.get("/rezervacija", function (request, response) {
  response.sendFile(__dirname + "/public/rezervacija.html");
});

app.use(express.static("public"));

app.post("/send", (req, res) => {
  const output = `
  <p> Imate novu rezervaciju </p>
  <h3> Detalji rezervacije</h3>
  <ul>
      <li>Ime i prezime: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Broj telefona: ${req.body.number}</li>
      <li>Adresa preuzimanja: ${req.body.preuzimanje}</li>
      <li>Adresa vracanja: ${req.body.vracanje}</li>
      <li>Datum preuzimanja: ${req.body.datum_preuzimanja}</li>
      <li>Datum vracanja: ${req.body.datum_vracanja}</li>
      <li>Vozilo: ${req.body.vozilo}</li>
  </ul>
  `;

  const transporter = nodemailer.createTransport(mailGun(auth));

  const mailOptions = {
    from: `<${req.body.email}>`,
    to: "ttestiranje1@gmail.com",

    subject: "Invoices due",
    html: output,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      res.json("Rezervacija je Poslata");
    }
  });
});

app.listen(8080, () => console.log("Server started on port ${PORT}"));
