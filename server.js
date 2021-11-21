const express = require("express");
require("dotenv").config();
const app = new express();

app.use(express.static("./public"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
