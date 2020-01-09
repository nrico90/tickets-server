const { Router } = require("express");
const Comment = require("./model");
const authMiddleWare = require("../auth/middleware");

const router = new Router();

router.get("/comment/:id", (req, res, next) => {
  console.log("REQUEST PARAMS getcom", req.params.id);

  Comment.findAll({ where: { ticketId: req.params.id } })
    .then(comments => res.send(comments))
    .catch(next);
});

// router.post("/comment", (req, res, next) => {
//   Comment.create({ content: req.body.comment, id: req.body.id })
//     .then(comment => res.json({ message: "comment created", comment: comment }))
//     .catch(next);
// });

router.post("/comment", authMiddleWare, (req, res, next) => {
  console.log("REQUEST postcom", req.body);

  Comment.create(req.body)
    .then(comment => res.send(comment))
    .catch(next);
});

router.delete("/comment", (req, res, next) => {
  Comment.destroy({
    where: { text: req.body.text }
  })
    .then(comment => {
      res.json({ comment: comment });
    })
    .catch(next);
});

module.exports = router;
