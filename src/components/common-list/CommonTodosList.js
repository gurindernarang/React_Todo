import React from "react";
import { Card, CardHeader, CardText, CardActions } from "material-ui/Card";
import Divider from "material-ui/Divider";
import TodosList from "../todos-list/TodosList";
import NavigationTabs from "../navigation-tabs/NavigationTabs";
import { grey800 } from "material-ui/styles/colors";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
const headerStyle = {
  fontSize: 25,
  color: grey800,
};
const contentStyle = {
  minHeight: 600,
};

const CommonTodosList = (props) => {
  let location = useLocation();
  location = location.pathname ? location.pathname.replace("/", "") : "";
  let status =
    location === "pending"
      ? "initialized"
      : location === "completed"
      ? "finished"
      : "deleted";
  return (
    <Card>
      <CardHeader
        id="header"
        titleStyle={headerStyle}
        title="Todo Application"
      />
      <Divider />
      <CardText style={contentStyle}>
        <TodosList filter={status}></TodosList>
      </CardText>
      <CardActions>
        <NavigationTabs></NavigationTabs>
      </CardActions>
    </Card>
  );
};

export default CommonTodosList;
