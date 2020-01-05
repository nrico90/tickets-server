const { Router } = require("express");
const Ticket = require("./model");
const authw = require("../auth/middleware");

const router = new Router();

router.get("/ticket", (req, res, next) => {
  Ticket.findAll()
    .then(result => response.send(result))
    .catch(errors => next(errors));
});

router.post("/ticket", (req, res, next) => {
  Ticket.create(req.body)
    .then(ticket => res.send(ticket))
    .catch(next);
});

router.get("/event/:id/ticket/", (req, res, next) => {
  Ticket.findAll({
    where: { eventId: req.params.id }
  })
    .then(tickets => {
      res.json(tickets);
    })
    .catch(next);
});

router.put("/ticket/:id", async (req, res, next) => {
  const ticket = await Ticket.findByPk(req.params.id);

  await ticket.update(req.body);
  res.send(ticket);
});

router.get("/event/ticket/:ticketId", (req, res, next) => {
  Ticket.findByPk(req.params.ticketId)
    .then(ticket => {
      return res.send(ticket);
    })
    .catch(next);
});

module.exports = router;