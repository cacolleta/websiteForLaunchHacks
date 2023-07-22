const { log } = require("console");
const express = require("express");
let app = express();
const efu = require("express-fileupload");
const sqlite = require("sqlite3").verbose();
const fs = require("fs");

let PORT = 3000;

app.use(efu());
app.use(express.static("public"));

app.get("/getVideo", (req, res) => {
  const video_Id = req.headers.video_id;
  if (!video_Id) {
    res.sendStatus(404);
  } else {
    res.send("Success!");
  }
});

app.listen(PORT, () => {
  console.log(`app is listening on http://localhost:${PORT}`);
});
