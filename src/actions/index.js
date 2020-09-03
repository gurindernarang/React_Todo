//Todo Actions
import {getTodos, createTodo, deleteTodo, updateTodo} from "../utils/apiRequests";

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

export const deleteExistedTodo = (id) => async (dispatch) => {
  await deleteTodo(id, () => {
    dispatch({
      type: "DELETE_TODO",
      payload: {
        id: id,
      },
    });
  });
};

export const addTag = (tag) => async (dispatch) => {
  await updateTodo(tag, (response) => {
    dispatch({
      type: "ADD_TAG",
      payload: response.data && response.data.todo ? response.data.todo : [],
    });
  });
};

export const deleteTag = (data) => async (dispatch) => {
  await updateTodo(data, (response) => {
    dispatch({
      type: "DELETE_TAG",
      payload: response.data && response.data.todo ? response.data.todo : [],
    });
  });
};

export const updateTodoStatus = (data) => async (dispatch) => {
  await updateTodo(data, (response) => {
    dispatch({
      type: "UPDATE_STATUS",
      payload: response.data && response.data.todo ? response.data.todo : [],
    });
  });
};
