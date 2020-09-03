import React from "react";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import { grey500 } from "material-ui/styles/colors";
import { deleteExistedTodo } from "../../actions/index";
import { connect } from "react-redux";

const iconButtonElement = (
  <IconButton touch={true} tooltip="Actions" tooltipPosition="bottom-left">
    <MoreVertIcon color={grey500} />
  </IconButton>
);

const RightIconMenu = (props) => {
  //Calls deleteExistedTodo action
  const _deleteTodo = (e) => {
    e.preventDefault();
    if (props.todo) props.deleteExistedTodo(props.todo.id);
  };

  return (
    <IconMenu iconButtonElement={iconButtonElement}>
      <MenuItem>Edit</MenuItem>
      <MenuItem onClick={_deleteTodo}>Delete</MenuItem>
    </IconMenu>
  );
};

export default connect(null, {
  deleteExistedTodo,
})(RightIconMenu);
