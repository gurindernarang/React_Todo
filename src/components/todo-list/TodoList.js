import React, {useContext} from 'react';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Delete from 'material-ui/svg-icons/action/delete';
import {cyan500} from 'material-ui/styles/colors';
import './TodoList.css';
import Tags from '../tags/Tags';
import {deleteTodo} from '../../utils/apiRequests';
import {TodoContext} from '../../store/TodoContext';

function TodoList() {
  const [todos, setTodos] = useContext(TodoContext);
  //send API request to delete a TODO
  const _deleteTodo = (e, id) => {
    e.preventDefault();
    if (id)
      deleteTodo(id, response => {
        //Remove deleted ToDo from todos list
        setTodos(todos.filter(todo => {
          if (id !== todo.id)
            return todo
        }));
      });
  };
  return (
    <List>
      {todos.map((todo, index) => {
        return (<ListItem
          key={todo.id}
          leftCheckbox={<Checkbox id={todo.id}/>}
          primaryText={todo.title}
          secondaryText={<Tags tags={todo.tags} todoId={todo.id}></Tags>}
          rightIcon={<Delete hoverColor={cyan500} onClick={e => _deleteTodo(e, todo.id)}/>}
        />)
      })}
    </List>
  );
}

export default TodoList;