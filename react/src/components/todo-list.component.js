import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Todo = (props) => (
  <tr>
    <td className={props.todo.todo_completed ? "completed" : ""}>
      {props.todo.todo_description}
    </td>
    <td className={props.todo.todo_completed ? "completed" : ""}>
      {props.todo.todo_responsible}
    </td>
    <td className={props.todo.todo_completed ? "completed" : ""}>
      {props.todo.todo_priority}
    </td>
    <td>
      {/* if using node js use  */}
      <Link to={"/edit/" + props.todo._id}>Edit</Link>
      {/* if using deno use
      <Link to={"/edit/" + props.todo._id.$oid}>Edit</Link> */}
    </td>
  </tr>
);

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/")
      .then((response) => {
        this.setState({ todos: response.data });
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  todoList() {
    return this.state.todos.map((currentTodo, i) => {
      return <Todo todo={currentTodo} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3>Todos List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.todoList()}</tbody>
        </table>
      </div>
    );
  }
}
