import React from "react";
import classes from "./FeaturesItem.module.css";

const FeaturesItem = (props) => {
  return (
    <div >
      {/* require(`../assets/imgs/people/${this.props.name.toLowerCase()}.png` */}
      {/* require('../assets/imgs/people/' + this.props.name + '.png' */}
      <div className={classes.icon}>
        <img src={props.icon} alt="" />
      </div>
      <h2>{props.title}</h2>
      <p>
        {props.text}
      </p>
    </div>
  );
};

export default FeaturesItem;
