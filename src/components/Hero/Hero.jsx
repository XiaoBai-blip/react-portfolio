import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.contanier}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, i'm Xiao Bai (Rachel)</h1>
        <p className={styles.description}>A passionate data scientist and software developer with a knack for learning new stuff. My journey has been shaped by diverse experiences, including three data analyst internships where I I’ve driven impactful result with tools like Python, SQL, and Tableau. </p>
        <p className={styles.description}>I’ve tackled exciting challenges like building a Plant Leaf Disease AI model with cutting-edge computer vision and creating a real-time chat app using the MERN stack. These projects sharpened my skills in Python, PyTorch, and full-stack development, fueling my passion for innovation and impactful solutions.</p>
        <p className={styles.description}>I’m currently exploring new opportunities in tech industry. I’m eager to contribute to meaningful projects and continue pushing the boundaries of what’s possible with data and technology!</p> 
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
