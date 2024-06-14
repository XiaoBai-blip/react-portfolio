import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.contanier}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, i'm Xiao (Rachel)</h1>
        <p className={styles.description}>xxxxxxx</p>
        <a href="mailto:xiaobai@usc.edu" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/cute.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
