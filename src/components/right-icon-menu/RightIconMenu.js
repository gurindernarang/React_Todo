import React, {useState} from "react";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import {grey500} from "material-ui/styles/colors";
import {updateTodoStatus} from "../../actions/index";
import {connect} from "react-redux";
import PopUpWithInput from "../pop-ups/popUpWithInput";

const iconButtonElement = (
  <IconButton touch={true} tooltip="Actions" tooltipPosition="bottom-left">
    <MoreVertIcon color={grey500}/>
  </IconButton>
);

const RightIconMenu = (props) => {
  const [openState, setOpenState] = useState(false);
  //Calls deleteExistedTodo action
  const _deleteTodo = (e) => {
    e.preventDefault();
    const options = {
      id: props.todo.id,
      type: "update_status",
      data: {
        todo: {
          status: "deleted",
        },
      },
    };
    props.updateTodoStatus(options);
  };
  const closeClickHandler = () => {
    setOpenState(false);
  };
  const _updateTodo = () => {
    setOpenState(true);
  }
  return (
    <>
      <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem onClick={_updateTodo}>Edit</MenuItem>
        <MenuItem onClick={_deleteTodo}>Delete</MenuItem>
      </IconMenu>
      <PopUpWithInput open={openState} id={props.id} updateTodo={true} todo={props.todo} inputLabel="Enter Todo" title="Update Todo"
                      buttonLabel="Update Todo" onClickClose={closeClickHandler}/>
    </>
  );
};

export default connect(null, {
  updateTodoStatus,
})(RightIconMenu);
