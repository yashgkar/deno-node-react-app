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
};
