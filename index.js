const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  const ip = req.socket.remoteAddress;
  res.send(ip);
});

app.listen(8080, () => {
  console.log(`connected`);
});
