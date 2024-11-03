const express = require("express");
const Joi = require("joi");
const router = express.Router();

// Users array.
const users = [
  { id: 1, name: "Arber Lisaj" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "Doe Jane" },
  { id: 4, name: "Spongebob" },
  { id: 5, name: "Donald Duck" },
  { id: 6, name: "Bugs Bunny" },
];

// GET => Return all users in response to GET requests at root.
router.get("/", (req, res) => {
  res.send(users);
});

// GET/:id => Retrieve user by ID, return user or 404.
router.get("/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  if (!user)
    return res.status(404).send("The user with the given ID was not found.");
  res.send(user);
});

// DELETE/:id => Delete user by ID, return deleted user or 404.
router.delete("/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  if (!user)
    return res.status(404).send("The user with the given ID was not found.");

  const index = users.indexOf(user);
  users.splice(index, 1);

  res.send(user);
});

// POST => Create a new user.
router.post("/", (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = {
    id: users.length + 1,
    name: req.body.name,
  };

  users.push(user);
  res.send(user);
});

// PUT/:id => Update user by ID, validate input, return updated user or 400.
router.put("/:id", (req, res) => {
  const user = users.find((c) => c.id === parseInt(req.params.id));
  if (!user)
    return res.status(404).send("The user with the given ID was not found.");

  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  user.name = req.body.name;
  res.send(user);
});

// Validates user object against schema.
function validateUser(user) {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  return Joi.validate(user, schema);
}

module.exports = router;
