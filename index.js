const express = require("express");
let app = express();
const efu = require("express-fileupload");
const sqlite = require("sqlite3").verbose();

app.use(efu());
app.use(express.static("public"));

app.listen(3000, () => {
  console.log(`app is listening on http://localhost:3000`);
});
