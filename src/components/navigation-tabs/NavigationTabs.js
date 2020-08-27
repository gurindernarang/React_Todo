import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';
import History from 'material-ui/svg-icons/action/history';
import Home from 'material-ui/svg-icons/action/home';

const nearbyIcon = <IconLocationOn/>;

class NavigationTabs extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Home"
            icon={<Home/>}
            onClick={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Pending"
            icon={nearbyIcon}
            onClick={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Completed"
            icon={<History/>}
            onClick={() => this.select(2)}
          />
          <BottomNavigationItem
            label="Deleted"
            icon={<DeleteForever/>}
            onClick={() => this.select(3)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default NavigationTabs;