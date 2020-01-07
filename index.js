const express = require("express");

const bodyParser = require("body-parser");
const cors = require("cors");

const userRouter = require("./user/router");
const eventRouter = require("./event/router");
const authRouter = require("./auth/router");
const ticketRouter = require("./ticket/router");
const commentRouter = require("./coment/router");

const app = express();

const port = process.env.PORT || 4000;

const corsMiddleware = cors();
app.use(corsMiddleware);

const jsonParser = bodyParser.json();
app.use(jsonParser);

app.use(userRouter);
app.use(eventRouter);
app.use(authRouter);
app.use(ticketRouter);
app.use(commentRouter);

app.listen(port, () => console.log(`Listening on ${port}`));
