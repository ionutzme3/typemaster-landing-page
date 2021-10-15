import React from "react";
import classes from "./Header.module.css";
import logo from "../assets/shared/logo.svg";


const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__logo}>
        <img src={logo} alt="" />
      </div>
      <button className={classes.header__button}>Pre-order now</button>
    </header>
  );
};

export default Header;
