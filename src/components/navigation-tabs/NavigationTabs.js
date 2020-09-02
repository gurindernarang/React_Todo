import React, {useContext, useEffect, useState} from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';
import History from 'material-ui/svg-icons/action/history';
import Home from 'material-ui/svg-icons/action/home';
import {getTodos} from "../../utils/apiRequests";

const nearbyIcon = <IconLocationOn/>;

function NavigationTabs() {
  // const [selectedIndex, setSelectedIndex] = useState(0);
  // const [todos, setTodos] = useContext(TodoContext);
  // const select = (index, todoList) => {
  //   setSelectedIndex(index);
  //   //Get List of all the Todos
  //   getTodos('todos', response => {
  //     if (response.data && response.data.length) {
  //       if (index === 0)
  //         setTodos(response.data);
  //       else if (index === 1) {
  //         setTodos(response.data.filter(todo => {
  //           if (todo.status === "initialized") {
  //             return todo;
  //           }
  //         }));
  //       } else if (index === 2) {
  //         setTodos(response.data.filter(todo => {
  //           if (todo.status === "finished") {
  //             return todo;
  //           }
  //         }));
  //       }
  //     }
  //   });
  // }
  const [selectedIndex, setSelectedIndex] = useState(0);
  const select = (index, todoList) => {

  }
  return (
    <Paper zDepth={1}>
      <BottomNavigation selectedIndex={selectedIndex}>
        <BottomNavigationItem
          label="Home"
          icon={<Home/>}
          onClick={() => select(0)}
        />
        <BottomNavigationItem
          label="Pending"
          icon={nearbyIcon}
          onClick={() => select(1)}
        />
        <BottomNavigationItem
          label="Completed"
          icon={<History/>}
          onClick={() => select(2)}
        />
        <BottomNavigationItem
          label="Deleted"
          icon={<DeleteForever/>}
          onClick={() => select(3)}
        />
      </BottomNavigation>
    </Paper>
  );
}

export default NavigationTabs;