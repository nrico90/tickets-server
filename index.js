const express = require("express");

const bodyParser = require("body-parser");
const cors = require("cors");

const userRouter = require("./user/router");
const eventRouter = require("./event/router");
const ticketRouter = require("./ticket/router");

const app = express();

const port = process.env.PORT || 4000;

app.get("/", (request, response) => {
  response.send("hello world");
});

const corsMiddleware = cors();
app.use(corsMiddleware);

const jsonParser = bodyParser.json();
app.use(jsonParser);

app.use(userRouter);
app.use(eventRouter);
app.use(ticketRouter);

app.listen(port, () => console.log(`Listening on ${port}`));
