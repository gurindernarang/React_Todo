export default (state = [], action) => {
  switch (action.type) {
    case "GET_TODOS":
      return action.payload;
    case "CREATE_TODO":
      return [...state, action.payload];
    default:
      return state;
  }
};
