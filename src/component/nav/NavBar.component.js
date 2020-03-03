import React from 'react';

import MainNavLink from './MainNavLink.component';

import {Todo} from '../../util/Todo'


export default class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.GetTodo = this.GetTodo.bind(this);
    }

    GetTodo() {
        Todo.GetTodo();
    }


    render() {
        return (
            <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <MainNavLink To="/" LinkTitle="Todos" OnClick={this.GetTodo}/>
                    <MainNavLink To="/create" LinkTitle="Create Todo" />
                </ul>
            </div>
        );    
    }
}