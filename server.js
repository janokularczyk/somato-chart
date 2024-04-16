const express = require("express");
const path = require("path");
const router = require("./src/routes/indexRoutes");

const PORT = 8080;
const app = express();

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.static(path.join(__dirname, "/src/public")));
app.use(router.routes);

app.listen(PORT, () => {
  console.log(`Server is running`);
});