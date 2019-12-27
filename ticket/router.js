const { Router } = require("express");
const Ticket = require("./model");

const router = new Router();

router.get("/tickets", (req, res, next) => {
  Ticket.findAll()
    .then(tickets => {
      res.status(200).json({ tickets });
    })
    .catch(console.error());
});
