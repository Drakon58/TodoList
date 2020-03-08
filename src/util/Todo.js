import axios from 'axios'

const TodoBaseURL = "http://localhost:3000/todos";
const TodoAdd = "/add";
const TodoUpdate = "/update";
const TodoRemove = "/remove";

export const Todo = {
    GetTodo: () => {
        return axios.get(`${TodoBaseURL}`)
            .catch((error) => {
                console.error(error);
            }).then(resJson => {
                console.log(resJson.data);
                return resJson.data;
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
        return axios.post(`${TodoBaseURL}${TodoAdd}`, todoDetails)
            .catch((error) => {
                console.error(error);
                return false;
            })
            .then(res => {
                console.log(res.data)
                return true;
            });
    },

    EditTodo: (todoDetails) => {
        return axios.post(`${TodoBaseURL}${TodoUpdate}/${todoDetails.id}`, todoDetails)
            .catch((error) => {
                console.error(error);
                return false;
            })
            .then(res => {
                console.log(res.data)
                return true;
            });
    },

    RemoveTodo: (id) => {
        axios.post(`${TodoBaseURL}${TodoRemove}/${id}`)
            .catch((error) => {
                console.error(error);
            }).then(resJson => {
                console.log(resJson)
            });
    }
}