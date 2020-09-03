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
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        } else {
          return todo;
        }
      });
    case "DELETE_TAG":
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        } else {
          return todo;
        }
      });
      case "UPDATE_STATUS":
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};
