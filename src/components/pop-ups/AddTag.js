import React, {useContext, useState} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from "material-ui/TextField";
import {addTag} from "../../actions/index";
import {connect} from 'react-redux';

function AddTag(props) {
  const [tagname, setTagname] = useState("");
  // const [todos, setTodos] = useContext(TodoContext);
  const updateValue = (e) => {
    setTagname(e.target.value);
  };
  const saveTag = () => {
    //Creating Object which we needs to pass to updateTodo function of apiRequests as body
    const options = {
      id: props.id,
      type: "assign_tag",
      data: {
        tag: {
          name: tagname
        }
      }
    };
    props.addTag(options);
    props.onClickClose();
  }
  const style = {
    margin: 12,
  };
  const actions = [
    <FlatButton label="Cancel" onClick={props.onClickClose}/>,
    <RaisedButton label="Save Tag" primary={true} style={style} onClick={saveTag}/>,
  ];
  return (
    <div>
      <Dialog title="Add Tag" actions={actions} modal={false} open={props.open} onRequestClose={props.onClickClose}>
        <TextField hintText="Enter Tag" fullWidth={true} onChange={updateValue} autoFocus={true}/>
      </Dialog>
    </div>
  );
}

export default connect(null, {
  addTag
})(AddTag);