import React, {useContext} from 'react';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import TodoList from '../todo-list/TodoList';
import NavigationTabs from "../navigation-tabs/NavigationTabs";
import {grey800} from 'material-ui/styles/colors';
import './LandingView.css';
import {createTodo} from '../../utils/apiRequests';
import {TodoContext} from "../../store/TodoContext";

const headerStyle = {
  fontSize: 25,
  color: grey800
};

function LandingView() {
  const [todos, setTodos] = useContext(TodoContext);
  const create = (e) => {
    //On click Enter key we send a POST Request
    const title = e.target.value.trim();
    if (e.keyCode === 13 && title.length) {
      //JSON require to pass in POST request
      const todo = {
        todo: {
          title: title
        }
      };
      //Code to remove event out of synthetic data pool
      e.persist();
      //Send POST API request
      createTodo(todo, response => {
        if (response.data) {
          //add data in Todos Array
          setTodos([...todos, response.data.todo]);
          //Empty Text box
          e.target.value = "";
        }
      });
    }
  };
  return (
    <Card>
      <CardHeader titleStyle={headerStyle} id="header" title="Todo Application"/>
      <Divider/>
      <CardText>
        <TextField hintText="Enter Todo" fullWidth={true} onKeyUp={create}/>
        <TodoList></TodoList>
      </CardText>
      <CardActions>
        <NavigationTabs></NavigationTabs>
      </CardActions>
    </Card>
  );
}

export default LandingView;