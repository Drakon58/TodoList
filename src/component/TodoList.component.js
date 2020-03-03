import React from 'react';
import { Link } from 'react-router-dom';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    async componentDidMount() {
        var todoList = this.props.GetTodo();
        this.setState({
            todos: await this.props.GetTodo()
        });
        console.log(todoList)
    }

    render() {
        return (
            <div className="container">
                <p>TodoList Display</p>
                {
                    this.state.todos ?
                        this.state.todos.map((todoItem, index) => {
                            return <React.Fragment key={index}>
                                <table className="table table-striped table-dark">
                                    <thead>
                                        <tr>
                                            <th colspace="2" className="text-left">{todoItem.todo_description}
                                                <br />
                                                <Link to={{
                                                    pathname: `/edit/${todoItem._id}`,
                                                    state: {
                                                        todo: todoItem
                                                    }
                                                }}
                                                >Edit</Link></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>Assignee: </th><td>{todoItem.todo_responsible}</td>
                                        </tr>
                                        <tr>
                                            <th>Priority: </th><td>{todoItem.todo_priority}</td>
                                        </tr>
                                        <tr>
                                            <th>Completed: </th><td>{String(todoItem.todo_completed)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <br />
                            </React.Fragment>
                        }
                        ) : "Nothing to display"
                }
            </div>
        );
    }
}