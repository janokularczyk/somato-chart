const express = require("express");
const { join } = require("node:path");

const app = express();
const PORT = 8080;

app.use(express.static(join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
