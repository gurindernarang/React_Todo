import React from "react";
import {Card, CardHeader, CardText, CardActions, CardTitle} from "material-ui/Card";
import Divider from "material-ui/Divider";
import TodosList from "../todos-list/TodosList";
import NavigationTabs from "../navigation-tabs/NavigationTabs";
import {grey800} from "material-ui/styles/colors";
import {connect} from "react-redux";
import {useLocation} from "react-router-dom";

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
      ? {filter: "initialized", title: "Pending Todos"}
      : location === "completed"
      ? {filter: "finished", title: "Finished Todos"}
      : {filter: "deleted", title: "Deleted Todos"};
  return (
    <Card>
      <CardHeader
        id="header"
        titleStyle={headerStyle}
        title="Todo Application"
      />
      <Divider/>
      <CardTitle title={status.title}/>
      <CardText style={contentStyle}>
        <TodosList filter={status.filter}></TodosList>
      </CardText>
      <CardActions>
        <NavigationTabs></NavigationTabs>
      </CardActions>
    </Card>
  );
};

export default CommonTodosList;
