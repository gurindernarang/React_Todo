import React, { useEffect } from "react";
import { List, ListItem } from "material-ui/List";
import Checkbox from "material-ui/Checkbox";
import { grey800, grey100 } from "material-ui/styles/colors";
import "./TodosList.css";
import Tags from "../tags/Tags";
import { connect } from "react-redux";
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
  const _listclick = (e) => {
    e.preventDefault();
  };
  return (
    <List>
      {props.todos.length ? (
        props.todos.map((todo) => {
          return (
            <>
              {todo.status === props.filter || todo.filter === undefined ? (
                <ListItem
                  id="list-item"
                  style={todo.status === "finished" ? listStyleDisbled : {}}
                  key={todo.id}
                  leftCheckbox={
                    <Checkbox
                      id={todo.id}
                      onClick={_updateTodo}
                      checked={todo.status === ("finished" || "deleted")}
                    />
                  }
                  rightIconButton={<RightIconMenu todo={todo} />}
                  primaryText={todo.title}
                  secondaryText={
                    <Tags
                      key={todo.id}
                      tags={todo.tags}
                      id={todo.id}
                      disabled={todo.status === ("finished" || "deleted")}
                    />
                  }
                  onClick={_listclick}
                />
              ) : (
                <></>
              )}
            </>
          );
        })
      ) : (
        <h1 style={h1Style}>No Todo Found! Please add Todo</h1>
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
