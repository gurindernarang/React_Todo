import React, {useState} from 'react';
import Chip from "material-ui/Chip";
import {cyan200, grey500} from "material-ui/styles/colors";
import AddBox from 'material-ui/svg-icons/content/add-box';
import AddTag from '../pop-ups/AddTag'

const tagStyles = {
  chip: {
    margin: 4,
    height: 32,
    labelColor: "red",
    backgroundColor: cyan200
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  addIconStyle: {
    marginTop: 8,
    marginLeft: 8
  }
};

function handleRequestDelete(e) {
  e.preventDefault();
  alert('You clicked the delete button.');
}

function Tags(props) {
  const [state, setState] = useState(false);
  const addTag = (e) => {
    e.preventDefault();
    setState(true);
  }
  const closeClickHandler = () => {
    setState(false);
  };
  return (
    <div style={tagStyles.wrapper}>
      {props.tags.map((tag, index) => {
        return (
          <Chip id='tag' style={tagStyles.chip} onRequestDelete={handleRequestDelete}>{tag.name}</Chip>)
      })}
      <AddBox style={tagStyles.addIconStyle} onClick={addTag} color={grey500}></AddBox>
      <AddTag open={state} id={props.todoId} onClickClose={closeClickHandler}></AddTag>
    </div>
  );
}

export default Tags;