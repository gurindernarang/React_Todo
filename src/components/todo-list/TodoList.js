import React, {useContext} from 'react';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Delete from 'material-ui/svg-icons/action/delete';
import {cyan500, grey100} from 'material-ui/styles/colors';
import './TodoList.css';
import Tags from '../tags/Tags';
import {deleteTodo, updateTodo} from '../../utils/apiRequests';
import {TodoContext} from '../../store/TodoContext';

const listStyleDisbled = {
  textDecorationLine: 'line-through',
  textDecorationStyle: 'solid',
  backgroundColor: grey100,
  pointerEvents: 'none'
};

function TodoList() {
  const [todos, setTodos] = useContext(TodoContext);
  //send API request to delete a TODO
  const _deleteTodo = (e, id) => {
    e.preventDefault();
    if (id)
      deleteTodo(id, response => {
        //Remove deleted ToDo from todos list is status code is 204 i.e success
        if (response.status === 204) {
          setTodos(todos.filter(todo => {
            if (id !== todo.id)
              return todo
          }));
        }
      });
  };
  const _updateTodo = (e) => {
    const options = {
      id: e.target.id,
      type: "update_status",
      data: {
        todo: {
          status: e.target.checked ? "finished" : "initialized"
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
  };
  return (
    <List>
      {todos.map((todo) => {
        return (<ListItem
          style={todo.status === 'finished' ? listStyleDisbled : ''}
          key={todo.id}
          leftCheckbox={<Checkbox id={todo.id} onClick={_updateTodo}
                                  checked={todo.status === ('finished' || 'deleted')}/>}
          primaryText={todo.title}
          secondaryText={<Tags tags={todo.tags} id={todo.id}
                               disabled={todo.status === ('finished' || 'deleted')}/>}
          rightIcon={<Delete hoverColor={cyan500} onClick={e => _deleteTodo(e, todo.id)}/>}
        />)
      })}
    </List>
  );
}

export default TodoList;