import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo/Todo.js'

// Source: https://scotch.io/tutorials/create-a-simple-to-do-app-with-react

class App extends Component {
  state = ({
    todos : [
    ]
  });

  buttonClickHandler = (event) => {
    console.log("'+' Button was hit!");

    let valueInInputBox = document.querySelector("#todoInputBox").value;
    // console.log("Value in input box: " + valueInInputBox);

    const todosCopy = [...this.state.todos];
    // console.log("Current TODOs: " + todosCopy);

    const newTodo = {
      id : Math.random().toString(36).substring(2, 15), 
      todoString : valueInInputBox
    };

    todosCopy.push(newTodo);
    this.setState( {
      todos: todosCopy
    } );

    document.querySelector("#todoInputBox").value = "";
    // console.log("New TODOs: " + todosCopy);
  }

  render() {
    const todos = (
      <div>
        {
          this.state.todos.map( (todo) => {
            return <Todo 
              key={todo.id} 
              todo={todo.todoString}
            />
          })
        }
      </div>
    );

    return (
      <div className="App">
        <h3 className="TodosApp">Welcome to the TODOs App</h3>
        <div className="input-group">
          <input type="text" className="form-control mr-1 width100" id="todoInputBox" placeholder="Enter TODO"/>
          <span className="input-group-btn">
            <button type="button" className="btn btn-info" onClick={this.buttonClickHandler}>+</button>
          </span>
        </div>
        
        <h3 className="TodoListHeading">TODOs List (Count: {this.state.todos.length}) </h3>
        <ul className="list-group list-group-flush">
          {todos}
        </ul>
      </div>
    );
  }
}

export default App;
