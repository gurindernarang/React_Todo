import React, {useState} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from "material-ui/TextField";

function AddTag(props) {
  const saveTag = () => {

  };
  const style = {
    margin: 12,
  };
  const actions = [
    <FlatButton label="Cancel" onClick={props.onClickClose}/>,
    <RaisedButton label="Save Tag" primary={true} style={style}/>,
  ];
  return (
    <div>
      <Dialog
        title="Add Tag"
        actions={actions}
        modal={false}
        open={props.open}
        onRequestClose={props.onClickClose}
      >
        <TextField hintText="Enter Tag" fullWidth={true} onChange={saveTag}/>
      </Dialog>
    </div>
  );
}

export default AddTag;