import React, { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationItem,
} from "material-ui/BottomNavigation";
import Paper from "material-ui/Paper";
import IconLocationOn from "material-ui/svg-icons/communication/location-on";
import DeleteForever from "material-ui/svg-icons/action/delete-forever";
import History from "material-ui/svg-icons/action/history";
import Home from "material-ui/svg-icons/action/home";

const nearbyIcon = <IconLocationOn />;

function NavigationTabs() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const select = (index, todoList) => {};
  return (
    <Paper zDepth={1}>
      <BottomNavigation selectedIndex={selectedIndex}>
        <BottomNavigationItem
          label="Home"
          icon={<Home />}
          onClick={() => select(0)}
        />
        <BottomNavigationItem
          label="Pending"
          icon={nearbyIcon}
          onClick={() => select(1)}
        />
        <BottomNavigationItem
          label="Completed"
          icon={<History />}
          onClick={() => select(2)}
        />
        <BottomNavigationItem
          label="Deleted"
          icon={<DeleteForever />}
          onClick={() => select(3)}
        />
      </BottomNavigation>
    </Paper>
  );
}

export default NavigationTabs;
