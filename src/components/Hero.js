import React from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div >
        <h1 >
          Typemaster <br /> keyboard
        </h1>
        <p >
          Improve your productivity and gaming without breaking the bank.
          Upgrade to a high quality mechanical typing experience.
        </p>
        <div className={classes.subscription} class="subscription">
          <button className={classes.subscription__button} >Pre-order now</button>
          <button className={classes.subscription__outline}>Release on 5/27</button>
        </div>
      </div>
      <div className={classes.hero__image}></div>
    </section>
  );
};

export default Hero;
