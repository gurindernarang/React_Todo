import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Delete from 'material-ui/svg-icons/action/delete';
import {cyan500, cyan200} from 'material-ui/styles/colors';
import Chip from 'material-ui/Chip';
import './TodoList.css';

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
function handleRequestDelete() {
    alert('You clicked the delete button.');
}

function handleClick() {
    alert('You clicked the Chip.');
}
function TodoList() {
    return (
        <List>
            <ListItem
                leftCheckbox={<Checkbox />}
                primaryText="Notifications"
                secondaryText={<Chip id='tag' style={tagStyles.chip} onRequestDelete={handleRequestDelete} onClick={handleClick}>
                        Text Chip</Chip>}
                rightIcon={<Delete hoverColor={cyan500}/>}
            />
            <ListItem
                leftCheckbox={<Checkbox/>}
                primaryText="Sounds"
                secondaryText="Hangouts message"
                rightIcon={<Delete hoverColor={cyan500}/>}
            />
            <ListItem
                leftCheckbox={<Checkbox/>}
                primaryText="Video sounds"
                secondaryText="Hangouts video call"
                rightIcon={<Delete hoverColor={cyan500}/>}
            />
        </List>
    );
}

export default TodoList;