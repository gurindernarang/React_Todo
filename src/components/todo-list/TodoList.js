import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Delete from 'material-ui/svg-icons/action/delete';
import {red500} from 'material-ui/styles/colors';
import Chip from 'material-ui/Chip';

const iconStyles = {
    marginRight: 24,
};
const styles = {
    chip: {
        margin: 0,
        height: 40
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
    },
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
                leftCheckbox={<Checkbox/>}
                primaryText="Notifications"
                secondaryText={<Chip style={styles.chip} onRequestDelete={handleRequestDelete} onClick={handleClick}>
                        Text Chip</Chip>}
                rightIcon={<Delete hoverColor={red500}/>}
            />
            <ListItem
                leftCheckbox={<Checkbox/>}
                primaryText="Sounds"
                secondaryText="Hangouts message"
                rightIcon={<Delete hoverColor={red500}/>}
            />
            <ListItem
                leftCheckbox={<Checkbox/>}
                primaryText="Video sounds"
                secondaryText="Hangouts video call"
                rightIcon={<Delete hoverColor={red500}/>}
            />
        </List>
    );
}

export default TodoList;