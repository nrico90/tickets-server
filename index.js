const express = require("express");

const bodyParser = require("body-parser");
const cors = require("cors");

const userRouter = require("./user/router");
const eventRouter = require("./event/router");
const auth = require("./auth/router");
const ticketRouter = require("./ticket/router");

const app = express();

const port = process.env.PORT || 4000;

const corsMiddleware = cors();
app.use(corsMiddleware);

const jsonParser = bodyParser.json();
app.use(jsonParser);

app.use(userRouter);
app.use(eventRouter);
app.use(auth);
app.use(ticketRouter);

app.listen(port, () => console.log(`Listening on ${port}`));
