import React, { useEffect } from "react";
import { List, ListItem } from "material-ui/List";
import Checkbox from "material-ui/Checkbox";
import Delete from "material-ui/svg-icons/action/delete";
import { cyan500, grey100 } from "material-ui/styles/colors";
import "./TodosList.css";
import Tags from "../tags/Tags";
import { deleteTodo, updateTodo } from "../../utils/apiRequests";
import { connect } from "react-redux";
import { getTodosList } from "../../actions/index";

const listStyleDisbled = {
  textDecorationLine: "line-through",
  textDecorationStyle: "solid",
  backgroundColor: grey100,
  pointerEvents: "none",
};

function TodosList(props) {
  console.log("State", props.todos);
  useEffect(() => {
    props.getTodosList();
  }, []);
  //send API request to delete a TODO
  const _deleteTodo = (e, id) => {
    e.preventDefault();
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
  return { todos: state.todos };
};

export default connect(mapStateToProps, { getTodosList })(TodosList);
