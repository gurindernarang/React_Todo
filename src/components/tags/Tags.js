import React from 'react';
import Chip from "material-ui/Chip";
import {cyan200} from "material-ui/styles/colors";

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
  }
};

function handleRequestDelete(e) {
  e.preventDefault();
  alert('You clicked the delete button.');
}

function Tags(props) {
  return (
    <div style={tagStyles.wrapper}>
      {props.tags.map((tag,index)=>{
        return (
            <Chip id='tag' style={tagStyles.chip} onRequestDelete={handleRequestDelete}>{tag.name}</Chip>)
      })}
    </div>
  );
}

export default Tags;