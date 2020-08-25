import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import  TodoList from '../todo-list/TodoList'
import './LandingView.css'
function LandingView() {
    return (
        <Card>
            <CardHeader id="header" title="Todo Application"/>
            <Divider />
            <CardText>
                <TextField hintText="Enter Todo" fullWidth={true}/>
                <TodoList></TodoList>
            </CardText>
        </Card>
    );
}

export default LandingView;