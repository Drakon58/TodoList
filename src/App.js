import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, matchPath } from 'react-router-dom';

import TodoList from './component/TodoList.component';
import EditTodo from './component/EditTodo.component';
import CreateTodo from './component/CreateTodo.component';

import NavBar from './component/nav/NavBar.component';

import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import {Todo} from './util/Todo'

export class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <NavBar/>
          </nav>
        </div>
        <Switch>
          <Route path="/edit/:id">
            <EditTodo EditTodo={Todo.EditTodo}/>
          </Route>
          <Route path="/create">
            <CreateTodo CreateTodo={Todo.CreateTodo}/>
          </Route>
          <Route exact path="/">
            <TodoList GetTodo={Todo.GetTodo}/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
