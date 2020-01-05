const { Router } = require("express");
const Event = require("./model");

const router = new Router();

router.get("/events", (req, res, next) => {
  const limit = req.query.limit || 9;
  const offset = req.query.offset || 0;

  Event.findAll()
    .then(events => {
      res.send(events);
    })
    .catch(next);

  // Event.count().then(total =>
  //   Event.findAll({ limit, offset })
  //     .then(events => {
  //       let page = Math.ceil(total / limit);
  //       response.json({ events, total, page });
  //     })
  //     .catch(next)
  // );
});

router.post("/events", (req, res, next) => {
  Event.create(req.body)
    .then(event => res.send(event))
    .catch(next);
});

router.get("/events/:id", (req, res, next) => {
  Event.findByPk(req.params.eventId)
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
