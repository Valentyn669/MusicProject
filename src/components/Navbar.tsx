import classes from "./Navbar.module.scss";
import logo from "../img/logo.png";
import { ReactComponent as Threelines } from "../img/threelines.svg";
import { useEffect, useState } from "react";

import CustomLink from "./CustomLink";
export const Navbar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [scrollHeight, setScrollHeight] = useState(window.scrollY);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const clickOutside = (e: Event) => {
      const target = e.target as HTMLElement;
      if (!target.closest("nav")) {
        setToggleMenu(false);
      }
    };
    window.addEventListener("click", clickOutside);

    return () => {
      window.removeEventListener("click", clickOutside);
    };
  }, []);

  useEffect(() => {
    const changeWidth = () => {
      setScrollHeight(window.scrollY);
    };
    window.addEventListener("scroll", changeWidth);

    return () => {
      window.removeEventListener("scroll", changeWidth);
    };
  }, []);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  let navbarClass: any;
  if (scrollHeight < 400) {
    navbarClass = classes.navbar;
  } else {
    navbarClass = `${classes.navbar} ${classes.scrollBar}`;
  }
  const closeNavHandler = () => {
    setToggleMenu(false);
  };

  return (
    <>
      <nav className={navbarClass}>
        <CustomLink to="/">
          <img src={logo} alt="Music logo" />
        </CustomLink>
        {(toggleMenu || screenWidth > 700) && (
          <ul className={classes.menuList}>
            <CustomLink closeNav={closeNavHandler} to="/">
              Home
            </CustomLink>
            <CustomLink closeNav={closeNavHandler} to="/news">
              News
            </CustomLink>
            <CustomLink closeNav={closeNavHandler} to="/albums">
              Albums
            </CustomLink>
            <CustomLink closeNav={closeNavHandler} to="/about">
              About
            </CustomLink>
            <CustomLink closeNav={closeNavHandler} to="/contact">
              Contact
            </CustomLink>
          </ul>
        )}
        <button className={classes.btn} onClick={toggleNav}>
          <Threelines className={classes.threeLines} />
        </button>
      </nav>
    </>
  );
};

export default Navbar;
