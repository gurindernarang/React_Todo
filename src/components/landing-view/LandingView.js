import React from 'react';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import  TodoList from '../todo-list/TodoList';
import NavigationTabs from "../navigation-tabs/NavigationTabs";
import {grey800} from 'material-ui/styles/colors';
import './LandingView.css';
const headerStyle = {
        fontSize: 25,
        color: grey800
};
function LandingView() {
    return (
        <Card>
            <CardHeader titleStyle={headerStyle} id="header" title="Todo Application"/>
            <Divider />
            <CardText>
                <TextField hintText="Enter Todo" fullWidth={true}/>
                <TodoList></TodoList>
            </CardText>
            <CardActions>
                <NavigationTabs></NavigationTabs>
            </CardActions>
        </Card>
    );
}

export default LandingView;