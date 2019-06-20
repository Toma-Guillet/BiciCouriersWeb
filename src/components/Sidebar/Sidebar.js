import React from "react";
import { elastic as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

export default props => {
  return (
    <Menu right>      
      <Link to="/signin">
        <div className="menu">NOUVELLES COMMANDES</div>
      </Link>   
      <Link to="/signin">
        <div className="menu">CLIENTS</div>
      </Link>   
      <Link to="/signin">
        <div className="menu">PROFIL COURSIER</div>
      </Link>   
      <Link to="/signin">
        <div className="menu">CONTACT</div>
      </Link>
    </Menu>
  );
};