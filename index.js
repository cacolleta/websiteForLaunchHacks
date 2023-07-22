const express = require("express");
let app = express();
const efu = require("express-fileupload");
const sqlite = require("sqlite3").verbose();
const fs = require("fs");

let PORT = 3000;

app.use(efu());
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`app is listening on http://localhost:${PORT}`);
});
