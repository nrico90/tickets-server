const { Router } = require("express");
const Event = require("./model");
const authMiddleWare = require("../auth/middleware");

const router = new Router();

router.get("/events", (req, res, next) => {
  const limit = req.query.limit || 100;
  const offset = req.query.offset || 0;

  Event.findAll({ limit, offset })
    .then(events => {
      res.send(events);
    })
    .catch(next);
});

// router.get("/events", (req, res, next) => {
//   const limit = req.query.limit || 2;
//   const offset = req.query.offset || 0;

//   Event.findAndCountAll({ limit, offset })
//     .then(events => {
//       res.send(events);
//     })
//     .catch(next);
// });

router.post("/events", authMiddleWare, (req, res, next) => {
  console.log("Do we have the user?", req.user);
  // const event = {
  //   name: req.body.name,
  //   description: req.body.description,
  //   picture: req.body.picture,
  //   start: req.body.start,
  //   end: req.body.end
  // };
  Event.create(req.body)
    .then(event => res.json(event))
    .catch(next);
});

router.get("/events/:id", (req, res, next) => {
  Event.findByPk(req.params.id)
    .then(event => {
      if (!event) {
        res.status(404).json({
          message: "This event does not exist"
        });
      } else {
        res.json({ event });
      }
    })
    .catch(next);
});

router.delete("/event/:id", (req, res, next) =>
  Event.destroy({ where: { id: req.params.id } })
    .then(number => res.send({ number }))
    .catch(next)
);

module.exports = router;
