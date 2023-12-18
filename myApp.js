let express = require("express");
let bodyParser = require("body-parser");
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));

require("dotenv").config();

app.use("/public", express.static(__dirname + "/public"));

absolutePath = __dirname + "/views/index.html";
app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

app.post("/name", (req, res) => {
  const first = req.body.first;
  const last = req.body.last;

  res.send({ name: `${first} ${last}` });
});

// app.get("/json", (req, res) => {
//   let msg = "Hello json";
//   if (process.env.MESSAGE_STYLE === "uppercase") {
//     msg = msg.toUpperCase();
//   }
//   res.json({
//     message: msg,
//   });
// });

// app.use("/", (req, res, next) => {
//   console.log(`${req.method} ${req.path} - ${req.ip}`);
//   next();
// });

// app.get(
//   "/now",
//   (req, res, next) => {
//     req.time = new Date().toString();
//     next();
//   },
//   (req, res) => {
//     res.send({ time: req.time });
//   }
// );

// id ##########
// app.get("/:word/echo", (req, res) => {
//   const { word } = req.params;
//   res.send({ echo: word });
// });

// query ##########
// app.get("/name", (req, res) => {
//   const first = req.query.first;
//   const last = req.query.last;

//   res.send({ name: `${first} ${last}` });
// });

module.exports = app;
