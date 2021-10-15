import React from "react";
import classes from "./About.module.css";

const About = () => {
  return (
    <section className={classes.about}>
      <div className={classes.about__photo1}>
        <div className={classes.overlay}></div>
      </div>
      <div className={classes.about__photo2}></div>
      <div className={classes.about__text}>
        <h2>
          Mechanical <br /> wireless <br /> keyboard
        </h2>
        <p>
          The Typemaster keyboard boasts top-notch build and practical design.
          It offers a wide variety of switches and keycaps, along with reliable
          wireless connectivity.
        </p>
      </div>
    </section>
  );
};

export default About;
