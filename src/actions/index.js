//Todo Actions
import {getTodos} from "../utils/apiRequests";
const getTodosList = async () => {
  //Get List of all the Todos
  const todos = await getTodos('todos', response => (response.data && response.data.length) ? response.data : []);
  return {
    type: 'GET_TODOS',
    paylaod: todos
  }
};

export const createTodo = todo => {
  return {
    type: 'CREATE_TODO',
    payload: todo
  };
};
