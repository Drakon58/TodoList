import axios from 'axios'

const TodoBaseURL = "http://localhost:3000/todos";
const TodoAdd = "/add";
const TodoUpdate = "/update";

export const Todo = {
    GetTodo: () => {
        return axios.get(`${TodoBaseURL}`)
        .catch((error) => {
            console.error(error);
        }).then(resJson => {
            console.log(resJson.data);
            return resJson.data
        });
    },

    GetTodoById: (id) => {
        return axios.get(`${TodoBaseURL}/${id}`)
        .catch((error) => {
            console.error(error);
        }).then(resJson => {
            console.log(resJson)
        });
    },

    CreateTodo: (todoDetails) => {
        axios.post(`${TodoBaseURL}${TodoAdd}`, todoDetails)
        .catch((error) => {
            console.error(error);
        })
        .then(res => console.log(res.data));
    },

    EditTodo: (todoDetails) => {
        axios.post(`${TodoBaseURL}${TodoUpdate}/${todoDetails.id}`, todoDetails)
        .catch((error) => {
            console.error(error);
        })
        .then(res => console.log(res.data));
    }
}