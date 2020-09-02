//Todo Actions
import {getTodos} from "../utils/apiRequests";

export const getTodosList = () => async dispatch => {
  await getTodos('todos', (response) => {
    dispatch({type: 'GET_TODOS', payload: (response.data && response.data.length) ? response.data : []});
  });
}

export const createTodo = todo => {
  return {
    type: 'CREATE_TODO',
    payload: todo
  };
};
export const deleteTodo = todo => {
  return {
    type: 'DELETE_TODO',
    payload: todo
  };
};
export const updateTodo = todo => {
  return {
    type: 'UPDATE_TODO',
    payload: todo
  };
};