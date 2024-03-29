const express = require("express");
const path = require("path");
const chartRoutes = require("./routes/indexRoutes");

const PORT = 8080;
const app = express();

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(express.static(path.join(__dirname, "public")));
app.use(chartRoutes.routes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
