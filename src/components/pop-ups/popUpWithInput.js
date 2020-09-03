import React, {useState} from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import {addTag} from "../../actions/index";
import {connect} from "react-redux";
import {updateTodo} from "../../utils/apiRequests";

function PopUpWithInput(props) {
  const [tagname, setTagname] = useState("");
  const updateValue = (e) => {
    setTagname(e.target.value.trim());
    if (e.keyCode === 13 && e.target.value.trim()) {
      saveTag();
    }
  };
  const saveTag = () => {
    //Creating Object which we needs to pass to updateTodo function of apiRequests as body
    const options = {
      id: props.id,
      type: "assign_tag",
      data: {
        tag: {
          name: tagname,
        },
      },
    };
    props.addTag(options);
    props.onClickClose();
  };
  const updateTodo = () => {
    console.log("Update Todo")
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
      onClick={props.addTag ? saveTag : updateTodo}
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
})(PopUpWithInput);
