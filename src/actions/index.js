//Todo Actions
import { getTodos, createTodo } from "../utils/apiRequests";

export const getTodosList = () => async (dispatch) => {
  await getTodos("todos", (response) => {
    dispatch({
      type: "GET_TODOS",
      payload: response.data && response.data.length ? response.data : [],
    });
  });
};

export const createNewTodo = (todo) => async (dispatch) => {
  await createTodo(todo, (response) => {
    dispatch({
      type: "CREATE_TODO",
      payload: response.data && response.data.todo ? response.data.todo : [],
    });
  });
};
export const deleteTodo = (todo) => {
  return {
    type: "DELETE_TODO",
    payload: todo,
  };
};
export const updateTodo = (todo) => {
  return {
    type: "UPDATE_TODO",
    payload: todo,
  };
};
