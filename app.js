const express = require("express");
const app = express();
const PORT = 3003;

app.get("/", (req, res) => {
  res.send("Initial Page ");
});

app.listen(PORT, () => {
  console.log("Server is running on port" + PORT);
});
