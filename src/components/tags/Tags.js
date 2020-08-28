import React, {useContext, useState} from 'react';
import Chip from "material-ui/Chip";
import {cyan200, grey500} from "material-ui/styles/colors";
import AddBox from 'material-ui/svg-icons/content/add-box';
import AddTag from '../pop-ups/AddTag'
import {updateTodo} from "../../utils/apiRequests";
import {TodoContext} from "../../store/TodoContext";

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

function Tags(props) {
  const [todos, setTodos] = useContext(TodoContext);
  const [state, setState] = useState(false);

  function deleteTag(e, tagname) {
    e.preventDefault();
    //Create Object which we needs to pass to updateTodo function of apiRequests
    const options = {
      id: props.id,
      type: "delete_tag",
      data: {
        tag: {
          name: tagname
        }
      }
    };
    updateTodo(options, response => {
      const _id = response.data.todo.id;
      setTodos(todos.map(todo => {
        if (todo.id === _id) {
          return response.data.todo;
        } else {
          return todo;
        }
      }));
    });
  }

  const addTag = (e) => {
    e.preventDefault();
    setState(true);
  }
  const closeClickHandler = () => {
    setState(false);
  };
  return (
    <div style={tagStyles.wrapper}>
      {props.tags.map((tag) => {
        return (
          <Chip id='tag' style={tagStyles.chip} onRequestDelete={(e) => deleteTag(e, tag.name)}>{tag.name}</Chip>)
      })}
      <AddBox style={tagStyles.addIconStyle} onClick={props.disabled ? () => {
      } : addTag} color={grey500}/>
      <AddTag open={state} id={props.id} onClickClose={closeClickHandler}/>
    </div>
  );
}

export default Tags;