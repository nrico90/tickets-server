const { Router } = require("express");
const User = require("./model");
const bcrypt = require("bcrypt");

const router = new Router();

router.get("/users", (req, res) => {
  User.findAll()
    .then(users => {
      console.log(users);
      res.status(200).json({ users });
    })
    .catch(console.error());
});

router.post("/users", (req, res, next) => {
  const user = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  };

  User.create(user)
    .then(user => res.send(user))
    .catch(error => next(error));
});

module.exports = router;
