const { Router } = require("express");
const Comment = require("./model");

const router = new Router();

router.get("/comment/:ticketId", (req, res, next) => {
  Comment.findAll({ where: { ticketId: req.params.ticketId } })
    .then(comment => res.send(comment))
    .catch(next);
});

router.post("/comment", (req, res, next) => {
  Comment.create(req.body)
    .then(comment => res.send(comment))
    .catch(next);
});

module.exports = router;
