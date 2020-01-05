const { Router } = require("express");
const User = require("./model");
const bcrypt = require("bcrypt");
const authw = require("../auth/middleware");

const router = new Router();

// router.get("/users", (req, res) => {
//   User.findAll()
//     .then(users => {
//       console.log(users);
//       res.status(200).json({ users });
//     })
//     .catch(console.error());
// });

router.post("/user", (req, res, next) => {
  const password = bcrypt.hashSync(req.body.password, 10);
  const user = { ...req.body, password };

  User.create({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  })
    .then(() =>
      res.status(201).send({ message: "User created succesfully", user: user })
    )
    .catch(next);
});

module.exports = router;
