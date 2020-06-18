const express = require("express");
const router = express.Router();

//controllers
const Tasks = require("../controller/todo.controller");
const { update } = require("../models/todo.model");
const getTasks = Tasks.getTasks;
const getTask = Tasks.getTask;
const addTask = Tasks.addTask;
const updateTask = Tasks.updateTask;

router.get("/", (req, res) => {
  getTasks(res);
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  getTask(id, res);
});

router.post("/add", (req, res) => {
  let body = req.body;
  addTask(body, res);
});

router.post("/update/:id", (req, res) => {
  let id = req.params.id;
  updateTask(id, req, res);
});

module.exports = router;
