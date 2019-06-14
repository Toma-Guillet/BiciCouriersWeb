import React from "react";
import { elastic as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

export default props => {
  return (
    // Pass on our props
    <Menu right {...props}>      
      <Link to="/signin">
        Map
      </Link>
    </Menu>
  );
};
