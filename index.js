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

// your first API endpoint...
app.get("/api/:date", (req, res) => {
  const date = new Date(req.params.date);
  const timestamp = {
    unix: date.getTime(),
    utc: date.toUTCString(),
  };

  res.json(timestamp);
});

// listen for requests :)
const listener = app.listen(port, () =>
  console.log("Your app is listening on port " + listener.address().port)
);
