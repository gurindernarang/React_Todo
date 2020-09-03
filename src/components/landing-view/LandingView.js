import React from "react";
import { Card, CardHeader, CardText, CardActions } from "material-ui/Card";
import Divider from "material-ui/Divider";
import TextField from "material-ui/TextField";
import TodosList from "../todos-list/TodosList";
import NavigationTabs from "../navigation-tabs/NavigationTabs";
import { grey800 } from "material-ui/styles/colors";
import "./LandingView.css";
import { connect } from "react-redux";
import { createNewTodo } from "../../actions/index";

const headerStyle = {
  fontSize: 25,
  color: grey800,
};
const contentStyle = {
  minHeight: 600,
};

function LandingView(props) {
  const create = (e) => {
    //On click Enter key we send a an action to add a Todo
    const title = e.target.value.trim();
    if (e.keyCode === 13 && title.length) {
      //JSON require to pass to POST request
      const todo = {
        todo: {
          title: title,
        },
      };
      //Code to remove event out of synthetic event pooling
      e.persist();
      //Call action to create a new Todo
      props.createNewTodo(todo);
      e.target.value = null;
    }
  };
  return (
    <Card>
      <CardHeader
        id="header"
        titleStyle={headerStyle}
        title="Todo Application"
      />
      <Divider />
      <CardText style={contentStyle}>
        <TextField
          hintText="Enter Todo"
          fullWidth={true}
          autoFocus={true}
          onKeyUp={create}
        />
        <TodosList></TodosList>
      </CardText>
      <CardActions>
        <NavigationTabs></NavigationTabs>
      </CardActions>
    </Card>
  );
}

export default connect(null, { createNewTodo })(LandingView);
