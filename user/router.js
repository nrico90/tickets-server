const { Router } = require("express");
const User = require("./model");
const bcrypt = require("bcrypt");

const router = new Router();

router.post("/login", (req, res, next) => {
  const user = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  };

  User.create(user)
    .then(user => res.send(user))
    .catch(error => next(error));
});

// router.post("/login", async (request, response, next) => {
//   try {
//     const found = await User.findOne({
//       where: { email: request.body.email }
//     });
//     if (found) {
//       response.status(400).send({ message: "email has already been used" });
//     } else {
//       const user = {
//         email: request.body.email,
//         password: bcrypt.hashSync(request.body.password, 10)
//       };
//       User.create(user).then(user => {
//         const jwt = toJWT({ userId: user.id });
//         response.json({ jwt, email: user.email });
//       });
//       response.send(user);
//     }
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
