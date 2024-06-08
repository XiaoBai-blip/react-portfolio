import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

// Note: href="/" 是指每click一次就刷新，href="#about" 是指每click一次about按钮就跳转到新的页面. <ul> tag creates an unordered list. <li> tag defines an individual list item.
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // The useState hook is used to add state to a functional component in React.
  // menuOpen: This is the current state value, initially set to false. It represents whether the menu is open or closed.
  // setMenuOpen: This is the state updater function. You call this function with a new value to update the menuOpen state.
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png") //当menu是open状态时，显示叉，不是open状态时，显示汉堡包按钮
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button" // provides alternative text for an image if the image cannot be displayed
          onClick={() => setMenuOpen(!menuOpen)} // 当click时，返回menuopen时相反的状态。当是menuOpen状态时，返回styles.menuOpen
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)} //每当click的时候，menu open的状态就会取消（close menu button）
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
