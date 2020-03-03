import React from 'react';

import Submit from './formInput/Submit.form.component';
import TextInput from './formInput/TextInput.form.component';
import RadioButtonMenu from './formInput/RadioButtonMenu.form.component';

export default class CreateTodo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
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

        const newTodo = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        };

        this.props.CreateTodo(newTodo);

        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <p>CreateTodo Display</p>
                <div>
                    <TextInput Label="Description: " Value={this.state.todo_description} OnChange={this.onChangeTodoDescription} />
                    <TextInput Label="Responsible: " Value={this.state.todo_responsible} OnChange={this.onChangeTodoResponsible} />
                    <RadioButtonMenu Options={this.priorityOptions} CurrentOption={this.state.todo_priority} OnChange={this.onChangeTodoPriority}/>
                </div>

                <Submit Value="Create Todo"/>
            </form>
        );
    }
}