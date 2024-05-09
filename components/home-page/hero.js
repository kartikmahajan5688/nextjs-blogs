import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/mypic.jpg"
          alt="My image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Kartik</h1>
      <p>
        I blog about Full Stack Web Development - especially MERN stack
      </p>
    </section>
  );
};

export default Hero;
