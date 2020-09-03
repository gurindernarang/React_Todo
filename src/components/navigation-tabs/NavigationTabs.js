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
import { Link } from "react-router-dom";

const nearbyIcon = <IconLocationOn />;

function NavigationTabs() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const select = (index) => {
    setSelectedIndex(index);
  };
  return (
    <Paper zDepth={1}>
      <BottomNavigation selectedIndex={selectedIndex}>
        <Link to="/">
          <BottomNavigationItem
            label="Home"
            icon={<Home />}
            onClick={() => select(0)}
          />
        </Link>
        <Link to="/pending">
          <BottomNavigationItem
            label="Pending"
            icon={nearbyIcon}
            onClick={() => select(1)}
          />
        </Link>

        <Link to="/completed">
          <BottomNavigationItem
            label="Completed"
            icon={<History />}
            onClick={() => select(2)}
          />
        </Link>
        <Link to="/deleted">
          <BottomNavigationItem
            label="Deleted"
            icon={<DeleteForever />}
            onClick={() => select(3)}
          />
        </Link>
      </BottomNavigation>
    </Paper>
  );
}

export default NavigationTabs;
