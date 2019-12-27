const { Router } = require("express");
const Event = require("./model");

const router = new Router();

router.get("/events", (request, response, next) => {
  const limit = request.query.limit || 9;
  const offset = request.query.offset || 0;

  Event.count().then(total =>
    Event.findAll({ limit, offset })
      .then(events => {
        let page = Math.ceil(total / limit);
        response.json({ events, total, page });
      })
      .catch(next)
  );
});

router.post("/events", (request, response, next) => {
  Event.create(request.body)
    .then(event => response.json(event))
    .catch(next);
});

router.get("/events/eventId", (req, res, next) => {
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

module.exports = router;
