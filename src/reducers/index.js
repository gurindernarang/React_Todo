import {combineReducers} from "redux";
import {getTodos} from "../utils/apiRequests";

const todosList = () => {
  //Get List of all the Todos
  getTodos('todos', response => (response.data && response.data.length) ? response.data : []);
};

export default combineReducers({
  todos: todosList
})
