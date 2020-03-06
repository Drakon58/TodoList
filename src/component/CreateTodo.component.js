import React from 'react';

import Submit from './formInput/Submit.form.component';
import TextInput from './formInput/TextInput.form.component';
import RadioButtonMenu from './formInput/RadioButtonMenu.form.component';

const FormFields = {
    description : 'todo_description',
    responsible : 'todo_responsible',
    priority : 'todo_priority',
    completed : 'todo_completed'
};

const priorityOptions =
[
    { Id: "priorityLow", Value: "Low" },
    { Id: "priorityMedium", Value: "Medium"},
    { Id: "priorityHigh", Value: "High"}
];

export default class CreateTodo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lastCreated: '',
            [FormFields.description]: '',
            [FormFields.responsible]: '',
            [FormFields.priority]: priorityOptions[0].Value,
            [FormFields.completed]: false
        }

        this.onFormModify = this.onFormModify.bind(this);
        this.onChangeCompleted = this.onChangeCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onFormModify(e, field) {
        var newVal = e.target.value;
        this.setState({
            [field]: newVal
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
            [FormFields.description]: this.state.todo_description,
            [FormFields.responsible]: this.state.todo_responsible,
            [FormFields.priority]: this.state.todo_priority,
            [FormFields.completed]: this.state.todo_completed
        };

        let createStatus = this.props.CreateTodo(newTodo);

        console.log(`State is ${createStatus}`)

        if (createStatus) {
            this.setState({
                lastCreated: this.state.todo_description,
                [FormFields.description]: '',
                [FormFields.responsible]: '',
                [FormFields.priority]: priorityOptions[0].Value,
                [FormFields.completed]: false
            });
        } else {
            this.setState({
                lastCreated: '',
                [FormFields.description]: '',
                [FormFields.responsible]: '',
                [FormFields.priority]: priorityOptions[0].Value,
                [FormFields.completed]: false
            });
        }
    }

    render() {
        return (
            <form className="container form-group" onSubmit={this.onSubmit}>
                <p>CreateTodo Display</p>
                {
                    this.state.lastCreated != '' ? <h2 className="alert-success">Created Todo: {this.state.lastCreated}</h2> : <br/>
                }
                <div>
                    <TextInput Label="Description: " Value={this.state.todo_description} OnChange={this.onFormModify} fieldName={FormFields["description"]}/>
                    <TextInput Label="Responsible: " Value={this.state.todo_responsible} OnChange={this.onFormModify} fieldName={FormFields["responsible"]}/>
                    <RadioButtonMenu Options={priorityOptions} CurrentOption={this.state.todo_priority} OnChange={this.onFormModify} fieldName={FormFields["priority"]}/>
                </div>

                <Submit Value="Create Todo"/>
            </form>
        );
    }
}