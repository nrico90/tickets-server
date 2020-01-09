const { Router } = require("express");
const Ticket = require("./model");
const authMiddleWare = require("../auth/middleware");
const Event = require("../event/model");

const router = new Router();

router.get("/tickets", (req, res, next) => {
  Ticket.findAll()
    .then(result => res.send(result))
    .catch(errors => next(errors));
});

// router.get("/ticket/:id", (req, res, next) => {
//   console.log("testing", req.params.id);

//   Ticket.findByPk(req.params.id)
//     .then(ticket => {
//       res.status(200).send(ticket);
//     })
//     .catch(next);
// });

router.get("/ticket/:id", (req, res, next) => {
  console.log("CHECK HERE", req.params.id);
  Ticket.findByPk(req.params.id)
    .then(ticket => {
      res.status(200).send(ticket);
    })
    .catch(next);
  // Ticket.findAll({ where: { id: req.params.id } })
  //   .then(ticket => {
  //     res.status(200).send(ticket);
  //   })
  //   .catch(next);
});

router.post("/events/:id", authMiddleWare, (req, res, next) => {
  const ticket = {
    price: req.body.price,
    description: req.body.description,
    picture: req.body.picture,
    author: req.body.author
    // eventId: req.params.id
  };
  Ticket.create(ticket)
    .then(ticket => res.send(ticket))
    .catch(next);
});

router.get("/tickets/:id/", (req, res, next) => {
  Ticket.findAll({
    where: { eventId: req.params.id }
  })
    .then(tickets => {
      res.json(tickets);
    })
    .catch(next);
});

// if the ticket is the only ticket of the author, add 10%

// if the ticket price is lower than the average ticket price for that event, that's a risk
// if a ticket is X% cheaper than the average price, add X% to the risk,
// if a ticket is X% more expensive than the average price, deduct X% from the risk, with a maximum of 10% deduction
// if the ticket was added during business hours (9-17), deduct 10% from the risk, if not, add 10% to the risk
// if there are >3 comments on the ticket, add 5% to the risk
//if
// The minimal risk is 5% (there's no such thing as no risk) and the maximum risk is 95%.
// let = 0
// if

router.put("/ticket/:id", async (req, res, next) => {
  const ticket = await Ticket.findByPk(req.params.id);

  await ticket.update(req.body);
  res.send(ticket);
});

// router.get("/ticket/:id", (req, res, next) => {
//   Ticket.findByPk(req.params.id)
//     .then(ticket => {
//       return res.send(ticket);
//     })
//     .catch(next);
// });

module.exports = router;
