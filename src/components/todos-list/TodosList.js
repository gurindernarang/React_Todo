import React, {useEffect} from "react";
import {List, ListItem} from "material-ui/List";
import Checkbox from "material-ui/Checkbox";
import Delete from "material-ui/svg-icons/action/delete";
import {cyan500, grey100} from "material-ui/styles/colors";
import "./TodosList.css";
import Tags from "../tags/Tags";
import {connect} from "react-redux";
import {getTodosList, deleteExistedTodo, updateTodoStatus} from "../../actions/index";

const listStyleDisbled = {
  textDecorationLine: "line-through",
  textDecorationStyle: "solid",
  backgroundColor: grey100,
  pointerEvents: "none",
};

function TodosList(props) {
  useEffect(() => {
    //Get the list of all the Todos
    props.getTodosList();
  }, [props]);
  //Calls deleteExistedTodo action
  const _deleteTodo = (e, id) => {
    e.preventDefault();
    if (id) props.deleteExistedTodo(id);
  };
  const _updateTodo = (e) => {
    const options = {
      id: e.target.id,
      type: "update_status",
      data: {
        todo: {
          status: e.target.checked ? "finished" : "initialized",
        },
      },
    };
    props.updateTodoStatus(options);
  };
  return (
    <List>
      {props.todos.map((todo) => {
        return (
          <ListItem
            style={todo.status === "finished" ? listStyleDisbled : {}}
            key={todo.id}
            leftCheckbox={
              <Checkbox
                id={todo.id}
                onClick={_updateTodo}
                checked={todo.status === ("finished" || "deleted")}
              />
            }
            primaryText={todo.title}
            secondaryText={
              <Tags
                key={todo.id}
                tags={todo.tags}
                id={todo.id}
                disabled={todo.status === ("finished" || "deleted")}
              />
            }
            rightIcon={
              <Delete
                hoverColor={cyan500}
                onClick={(e) => _deleteTodo(e, todo.id)}
              />
            }
          />
        );
      })}
    </List>
  );
}

const mapStateToProps = (state) => {
  return {todos: state.todos};
};

export default connect(mapStateToProps, {getTodosList, deleteExistedTodo, updateTodoStatus})(
  TodosList
);
