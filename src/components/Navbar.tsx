import classes from "./Navbar.module.scss";
import logo from "../img/logo.png";
import { ReactComponent as Threelines } from "../img/threelines.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [scrollHeight, setScrollHeight] = useState(window.scrollY);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

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

  return (
    <>
      <nav className={navbarClass}>
        <Link to="/">
          <img src={logo} alt="Music logo" />
        </Link>
        {(toggleMenu || screenWidth > 700) && (
          <ul className={classes.menuList}>
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/artists">Artists</Link>
            <Link to="/albums">Albums</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </ul>
        )}
        {/* <Threelines onClick={toggleNav} className={classes.threeLines} /> */}
        <button className={classes.btn} onClick={toggleNav}>
          <Threelines className={classes.threeLines} />
        </button>
      </nav>
    </>
  );
};

export default Navbar;
