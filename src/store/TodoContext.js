import React, {useEffect, useState, createContext} from "react";
import {getTodos} from "../utils/apiRequests";

export const TodoContext = createContext();
export const TodoProvider = props => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    //Get List of all the Todos
    getTodos('todos', response => {
        if (response.data && response.data.length) {
          setTodos(response.data);
        }
      }
    );
  }, []);
  return (
    <TodoContext.Provider value={[todos, setTodos]}>
      {props.children}
    </TodoContext.Provider>
  );
};