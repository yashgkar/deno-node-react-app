const Todo = require("../models/todo.model");

module.exports = {
  getTasks: (res) => {
    Todo.find(function (err, todos) {
      if (err) {
        console.log(err);
      } else {
        res.json(todos);
      }
    });
  },
  getTask: (id, res) => {
    Todo.findById(id, function (err, todo) {
      res.json(todo);
    });
  },
  addTask: (body, res) => {
    let todo = new Todo(body);
    todo
      .save()
      .then((todo) => {
        res.json({ todo: "todo added successfully" });
      })
      .catch((err) => {
        res.send("adding new todo failed");
      });
  },
  updateTask: (id, req, res) => {
    Todo.findById(id, function (err, todo) {
      if (!todo) {
        res.send("data is not found");
      } else {
        todo.todo_description = req.body.todo_description;
        todo.todo_responsible = req.body.todo_responsible;
        todo.todo_completed = req.body.todo_completed;
        todo.todo_priority = req.body.todo_priority;

        todo
          .save()
          .then((todo) => {
            res.json("Todo updated");
          })
          .catch((err) => {
            res.send("not updated");
          });
      }
    });
  },
};
