import React from "react";
import FeaturesItem from "./FeaturesItem";
import classes from "./Features.module.css";
import iconCompatible from "../assets/shared/icon-compatible.svg"
import iconBluetooth from "../assets/shared/icon-bluetooth.svg"
import iconBattery from "../assets/shared/icon-battery.svg"
import iconLight from "../assets/shared/icon-light.svg"

const Features = (props) => {
  return (
    <section className={classes.features}>
      <FeaturesItem
        icon={iconCompatible}
        title="Highly compatible"
        text="Easy to use and works well with all major computer brands, gaming consoles and mobile devices. Plug & play, no installation or driver needed."
        
      />
      <FeaturesItem
        icon={iconBluetooth}
        title="Wireless with bluetooth"
        text="Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer."

      />
      <FeaturesItem
        icon={iconBattery}
        title="High capacity battery"
        text="Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges.."

      />
      <FeaturesItem
        icon={iconLight}
        title="RGB backlit modes"
        text="Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions."

      />
    </section>
  );
};
export default Features;