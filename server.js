const express = require("express");
const PORT = process.env.PORT || 5500;
const app = express();

app.get("/", (req, res) => {
  return res.send(`Hello Express! aasdd Listening on port: ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
