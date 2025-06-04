// how to make empty node app  :  npm init => node pakg manager se ak application ko initialize krna 
 
  
require("dotenv").config();

const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World Hunain Afzal!");
});

app.get("/login", (req, res) => {
  res.send("<h1>this is login page</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
                                                 