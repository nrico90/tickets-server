const { Router } = require("express");
const Event = require("./model");

const router = new Router();

router.get("/event", (request, response, next) => {
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
  //   Event.findAndCountAll({ limit, offset })
  //     .then(result => response.send({ events: result.rows, total: result.count }))
  //     .catch(error => next(error));
});

router.post("/event", (request, response, next) => {
  Event.create(request.body)
    .then(event => response.send(event))
    .catch(next);
});

router.get("/events/:id", (req, res) => {
  const id = req.params.id;
  Event.findByPk(id)
    .then(async event => {
      if (!event) {
        res.status(404).json({
          message: "This event does not exist"
        });
      } else {
        res.json({ event });
      }
    })
    .catch(console.error());
});

module.exports = router;
