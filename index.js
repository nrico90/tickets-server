const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");

const User = require("./user/model");
const userRouter = require("./user/router");

const Event = require("./event/model");
const eventRouter = require("./event/router");

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
app.use(eventRouter);

app.listen(port, () => console.log(`Listening on ${port}`));
