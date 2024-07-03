const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 9090;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("this is a home route");
});

app.listen(port, () => {
  console.log(`server is running  at port ${port}`);
});
