// index.js
// where your node app starts
require("dotenv").config();
const port = +process.env.PORT;

// init project
const express = require("express");
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

const INVALID_DATE = "Invalid Date";

// empty date
app.get("/api", (req, res) => {
  const date = new Date();
  const unix = date.getTime();
  const utc = date.toUTCString();

  res.status(200).json({ unix, utc });
});

// your first API endpoint...
app.get("/api/:date", (req, res) => {
  let date = req.params.date;
  if (!date) {
    date = new Date();
  }

  const unix = isNaN(date) ? new Date(date).getTime() : +date;
  const utc = isNaN(date)
    ? new Date(date).toUTCString()
    : new Date(+date / 1000).toUTCString();

  res.json({ unix, utc });
});

// listen for requests :)
const listener = app.listen(port, () =>
  console.log("Your app is listening on port " + listener.address().port)
);
