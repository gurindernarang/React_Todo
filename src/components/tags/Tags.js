import React, {useState} from "react";
import Chip from "material-ui/Chip";
import {cyan200, grey500} from "material-ui/styles/colors";
import AddBox from "material-ui/svg-icons/content/add-box";
import PopUpWithInput from "../pop-ups/popUpWithInput";
import {deleteTag} from "../../actions/index";
import {connect} from "react-redux";

const tagStyles = {
  chip: {
    margin: 4,
    height: 32,
    labelColor: "red",
    backgroundColor: cyan200,
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
  },
  addIconStyle: {
    marginTop: 8,
    marginLeft: 8,
  },
};

function Tags(props) {
  const [openState, setOpenState] = useState(false);

  function deleteTag(e, tagname) {
    e.preventDefault();
    //Create Object which we needs to pass to updateTodo function inside apiRequests.js
    const options = {
      id: props.id,
      type: "delete_tag",
      data: {
        tag: {
          name: tagname,
        },
      },
    };
    props.deleteTag(options);
  }

  const addTag = (e) => {
    e.preventDefault();
    setOpenState(true);
  };
  const closeClickHandler = () => {
    setOpenState(false);
  };
  return (
    <div style={tagStyles.wrapper}>
      {props.tags.map((tag,index) => {
        return (
          <Chip
            key={index}
            id="tag"
            style={tagStyles.chip}
            onRequestDelete={(e) => deleteTag(e, tag.name)}
          >
            {tag.name}
          </Chip>
        );
      })}
      <AddBox
        style={tagStyles.addIconStyle}
        onClick={props.disabled ? () => {
        } : addTag}
        color={grey500}
      />
      <PopUpWithInput open={openState} id={props.id} addNewTag={true} inputLabel="Enter Tag" title="Add Tag"
                      buttonLabel="Save Tag" onClickClose={closeClickHandler}/>
    </div>
  );
}

export default connect(null, {
  deleteTag,
})(Tags);
