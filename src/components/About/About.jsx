import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.contanier} id="about">
      <h2 className={styles.title}>ABOUT</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/study.png")}
          alt="About image of me"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursorIcon" />
            <div className={styles.aboutItemText}>
              <h3>University of Southern California</h3>
              <h5>2024.01 - 2025.12</h5>
              <p>Master of Science in Data Science</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="serverIcon" />
            <div className={styles.aboutItemText}>
              <h3>University of Toronto</h3>
              <h5>2019.09 - 2023.05</h5>
              <p>
                Bachelor of Science in Statistics, Economics; Minor in
                Mathematics
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
