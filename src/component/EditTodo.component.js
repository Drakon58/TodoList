import React from 'react';
import { Todo } from '../util/Todo';
import { withRouter } from 'react-router-dom'

import Submit from './formInput/Submit.form.component';
import TextInput from './formInput/TextInput.form.component';
import RadioButtonMenu from './formInput/RadioButtonMenu.form.component';

class EditTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: '',
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }

        this.onChangeCompleted = this.onChangeCompleted.bind(this);
        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    priorityOptions =
    [
        { Id: "priorityLow", Value: "Low" },
        { Id: "priorityMedium", Value: "Medium"},
        { Id: "priorityHigh", Value: "High"}
    ];

    componentDidMount(){
        console.log(this.props.location.state.todo)
        this.setState(
            this.props.location.state.todo
        );
    }

    onChangeTodoDescription(e) {
        var newDesc = e.target.value;
        this.setState({
            todo_description: newDesc
        });
    }

    onChangeTodoResponsible(e) {
        var newResponsible = e.target.value;
        this.setState({
            todo_responsible: newResponsible
        });
    }

    onChangeTodoPriority(e) {
        var newPrioirity = e.target.value;
        this.setState({
            todo_priority: newPrioirity
        });
    }

    onChangeCompleted() {
        this.setState({
            todo_completed: !this.state.todo_completed
        });
    }


    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:\n
            Description: ${this.state.todo_description}\n
            Responsible: ${this.state.todo_responsible}\n
            Priority: ${this.state.todo_priority}\n
        `);

        const editTodo = {
            id: this.state._id,
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        };

        this.props.EditTodo(editTodo);

        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        });

        this.props.history.push('/');
    }

    render() {
        return (
            <form className="form-group" onSubmit={this.onSubmit}>
                <p>EditTodo for {this.props.match.params.id}</p>
                <div>
                    <TextInput Label="Description: " Value={this.state.todo_description} OnChange={this.onChangeTodoDescription} />
                    <TextInput Label="Responsible: " Value={this.state.todo_responsible} OnChange={this.onChangeTodoResponsible} />
                    <RadioButtonMenu Options={this.priorityOptions} CurrentOption={this.state.todo_priority} OnChange={this.onChangeTodoPriority} />
                </div>
                <Submit Value="Save Todo" />
            </form>

        );
    }
}

export default withRouter(EditTodo);