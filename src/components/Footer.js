import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>
        <span className={classes.footer__text}>Typemaster 2021 |</span> All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
