const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");
const auth = {
  auth: {
    api_key: "39dd7c4a1418bd3175d42c0950c67b69-0afbfc6c-2912145f",
    domain: "sandboxe7fe3d2b3d0241628c64b4a6776cb99a.mailgun.org",
  },
};

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
      <li>Ime i prezime: ${req.body.two}</li>
      <li>Email: ${req.body.four}</li>
      <li>Broj telefona: ${req.body.six}</li>
      <li>Adresa preuzimanja: ${req.body.check}</li>
      <li>Adresa vracanja: ${req.body.out}</li>
      <li>Datum preuzimanja: ${req.body.datum_preuzimanja}</li>
      <li>Datum vracanja: ${req.body.datum_vracanja}</li>
      <li>Vozilo: ${req.body.vozilo}</li>
  </ul>
  `;
  const transporter = nodemailer.createTransport(mailGun(auth));

  const mailOptions = {
    from: `<${req.body.four}>`,
    to: "testtest32332@gmail.com",

    subject: "REZERVACIJA",
    html: output,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + `${info}`);
      res.json("Rezervacija je Poslata");
    }
  });
});
// const PORT = 8080;

// app.listen(PORT, () => console.log("Server started on port:"`${PORT}`));

const port = 8080;
app.listen(port);
console.log(`Server running on port ${port}`);
