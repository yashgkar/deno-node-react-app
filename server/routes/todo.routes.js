const express = require("express");
const router = express.Router();

const Tasks = require("../controller/todo.controller");
const getTasks = Tasks.getTasks;

router.get("/", (req, res) => {
  getTasks(res);
});

module.exports = router;
