import axios from "axios";

const baseURL = "http://localhost:3000/api/";
export const getTodos = (option, callback) => {
  axios
    .get(baseURL + option)
    .then(response => callback(response))
    .catch(error => callback(error));
};
export const deleteTodo = (id, callback) => {
  axios
    .delete(baseURL + "todos/" + id)
    .then(response => callback(response))
    .catch(error => callback(error));
};
export const createTodo = (data, callback) => {
  axios
    .post(baseURL + 'todos', data)
    .then(response => callback(response))
    .catch(error => callback(error));
};
export const updateTodo = (options, callback) => {
  axios
    .patch(baseURL + 'todos/' + options.id + '/' + options.type, options.data)
    .then(response => callback(response))
    .catch(error => callback(error));
}