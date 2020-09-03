const updateState = (state, action) => {
  return state.map((todo) => {
    if (todo.id === action.payload.id) {
      return action.payload;
    } else {
      return todo;
    }
  });
};
export default (state = [], action) => {
  switch (action.type) {
    case "GET_TODOS":
      return action.payload;
    case "CREATE_TODO":
      return [...state, action.payload];
    case "DELETE_TODO":
      return state.filter((todo) => {
        if (todo.id !== action.payload.id) {
          return todo;
        }
      });
    case "ADD_TAG":
      return updateState(state, action);
    case "DELETE_TAG":
      return updateState(state, action);
    case "UPDATE_STATUS":
      return updateState(state, action);
    case "UPDATE_TODO":
      return updateState(state, action);
    default:
      return state;
  }
};
