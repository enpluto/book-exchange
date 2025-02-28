const express = require("express");
const router = express.Router();

const data = { message: "Hello, World!" };

router.get("/hello", (req, res) => {
  res.json(data);
});

module.exports = router;
