const express = require("express");
const path = require("path");
const appRouter = require("./src/routes/appRoutes");

const PORT = 8080;
const app = express();

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.static(path.join(__dirname, "/src/public")));
app.use(appRouter.routes);

app.listen(PORT, () => {
  console.log(`Server is running`);
});