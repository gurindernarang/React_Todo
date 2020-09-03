import React, {useEffect, useState} from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import {addTag, updateExistingTodo} from "../../actions/index";
import {connect} from "react-redux";

function PopUpWithInput(props) {
  const [inputVal, setInputVal] = useState("");
  useEffect(() => {
    setInputVal(props.todo ? props.todo.title : "");
  }, [props.todo]);
  const updateValue = (e) => {
    setInputVal(e.target.value.trim());
    if (e.keyCode === 13 && e.target.value.trim()) {
      if (props.addNewTag)
        saveTag();
      else
        updateTodo();
    }
  };
  const saveTag = () => {
    //Creating Object which we needs to pass to updateTodo function of apiRequests as body
    const options = {
      id: props.id,
      type: "assign_tag",
      data: {
        tag: {
          name: inputVal,
        },
      },
    };
    props.addTag(options);
    props.onClickClose();
  };
  const updateTodo = () => {
    const options = {
      id: props.todo.id,
      data: {
        todo: {
          title: inputVal,
        },
      },
    };
    props.updateExistingTodo(options);
    props.onClickClose();
  }
  const style = {
    margin: 12,
  };
  const actions = [
    <FlatButton label="Cancel" onClick={props.onClickClose}/>,
    <RaisedButton
      label={props.buttonLabel}
      primary={true}
      style={style}
      onClick={props.addNewTag ? saveTag : updateTodo}
    />,
  ];
  return (
    <div>
      <Dialog
        title={props.title}
        actions={actions}
        modal={false}
        open={props.open}
        onRequestClose={props.onClickClose}
      >
        <TextField
          hintText={props.inputLabel}
          fullWidth={true}
          value={inputVal}
          onChange={updateValue}
          onKeyUp={updateValue}
          autoFocus={true}
        />
      </Dialog>
    </div>
  );
}

export default connect(null, {
  addTag,
  updateExistingTodo
})(PopUpWithInput);
