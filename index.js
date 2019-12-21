const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");

const userRouter = require("./user/router");

const app = express();

const port = 4000;

app.get("/", (request, response) => {
  response.send("hello world");
});

const corsMiddleware = cors();
app.use(corsMiddleware);

const jsonParser = bodyParser.json();
app.use(jsonParser);

app.use(userRouter);

app.listen(port, () => console.log(`Listening on ${port}`));
