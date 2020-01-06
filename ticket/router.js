const { Router } = require("express");
const Ticket = require("./model");
const authw = require("../auth/middleware");

const router = new Router();

router.get("/tickets", (req, res, next) => {
  Ticket.findAll()
    .then(result => res.send(result))
    .catch(errors => next(errors));
});

router.post("/events/:id", (req, res, next) => {
  const ticket = {
    price: req.body.price,
    description: req.body.description,
    picture: req.body.picture,
    author: req.body.author,
    eventId: req.params.id
  };
  Ticket.create(ticket)
    .then(ticket => res.send(ticket))
    .catch(next);
});

router.get("/events/:id/ticket/", (req, res, next) => {
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

// router.get("/event/ticket/:ticketId", (req, res, next) => {
//   Ticket.findByPk(req.params.ticketId)
//     .then(ticket => {
//       return res.send(ticket);
//     })
//     .catch(next);
// });

module.exports = router;
