import axios from "axios";
import {toast} from "react-toastify";

const baseURL = "http://localhost:3000/api/";
export const getTodos = (option, callback) => {
  axios
    .get(baseURL + option)
    .then(response => {
      console.log("Status Code", response);
      callback(response)
    })
    .catch(error => {
      toast.error(error.message, {autoClose: 5000});
      callback(error)
    });
};
export const deleteTodo = (id, callback) => {
  axios
    .delete(baseURL + "todos/" + id)
    .then(response => callback(response))
    .catch(error => {
      toast.error(error.message, {autoClose: 5000});
      callback(error)
    });
};
export const createTodo = (data, callback) => {
  axios
    .post(baseURL + 'todos', data)
    .then(response => callback(response))
    .catch(error => {
      toast.error(error.message, {autoClose: 5000});
      callback(error)
    });
};
export const updateTodo = (options, callback) => {
  let _url = baseURL + 'todos/' + options.id + '/' + options.type;
  axios
    .patch(_url, options.data)
    .then(response => callback(response))
    .catch(error => {
      toast.error(error.message, {autoClose: 5000});
      callback(error)
    });
}