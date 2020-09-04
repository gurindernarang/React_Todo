import React, { useEffect } from "react";
import { List, ListItem } from "material-ui/List";
import Checkbox from "material-ui/Checkbox";
import { grey800, grey100, red500 } from "material-ui/styles/colors";
import "./TodosList.css";
import Tags from "../tags/Tags";
import { connect } from "react-redux";
import Restore from "material-ui/svg-icons/action/restore";
import {
  getTodosList,
  deleteExistedTodo,
  updateTodoStatus,
} from "../../actions/index";
import RightIconMenu from "../right-icon-menu/RightIconMenu";

const listStyleDisbled = {
  textDecorationLine: "line-through",
  textDecorationStyle: "solid",
  backgroundColor: grey100,
  pointerEvents: "none",
};

const h1Style = {
  color: grey800,
};

function TodosList(props) {
  console.log("props", props.filter);
  useEffect(() => {
    //Get the list of all the Todos
    props.getTodosList();
  }, []);
  //Update Todo Status in select checkbocx
  const _updateTodo = (e) => {
    let options = {
      type: "update_status",
      id: null,
      data: {
        todo: {
          status: null,
        },
      },
    };
    if (e.target) {
      options.id = e.target.id;
      options.data.todo.status = e.target.checked ? "finished" : "initialized";
    } else {
      options.id = e.id;
      options.data.todo.status = "initialized";
    }
    props.updateTodoStatus(options);
  };
  const _listclicked = (e) => {
    e.preventDefault();
  };
  let todosList = [];
  if (props.todos.length) {
    if (!props.filter)
      todosList = props.todos.filter((todo) => {
        if (todo.status !== "deleted") return todo;
      });
    else
      todosList = props.todos.filter((todo) => {
        if (todo.status === props.filter) return todo;
      });
  }
  return (
    <List>
      {todosList.length ? (
        todosList.map((todo) => {
          return (
            <ListItem
              id="list-item"
              style={todo.status === "finished" ? listStyleDisbled : {}}
              key={todo.id}
              leftCheckbox={
                todo.status !== "deleted" ? (
                  <Checkbox
                    id={todo.id}
                    onClick={_updateTodo}
                    checked={todo.status === ("finished" || "deleted")}
                  />
                ) : (
                  <Checkbox checked={false} disabled={true} />
                )
              }
              rightIconButton={
                todo.status !== "deleted" ? (
                  <RightIconMenu todo={todo} />
                ) : (
                  <Restore
                    hoverColor={red500}
                    onClick={() => {
                      _updateTodo(todo);
                    }}
                  />
                )
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
              onClick={_listclicked}
            />
          );
        })
      ) : (
        <h1 style={h1Style}>No Todos Found!!</h1>
      )}
    </List>
  );
}

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

export default connect(mapStateToProps, {
  getTodosList,
  deleteExistedTodo,
  updateTodoStatus,
})(TodosList);
