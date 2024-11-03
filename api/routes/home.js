const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Navigate to <a href='/api/users'>/api/users</a> to get the API");
});

module.exports = router;
