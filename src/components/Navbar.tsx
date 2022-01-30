import classes from "./Navbar.module.scss";
import logo from "../img/logo.png";
import { ReactComponent as Threelines } from "../img/threelines.svg";
import { ReactComponent as CrossSVG } from "../img/cross.svg";
import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
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
    const scroll = () => {
      setScrollHeight(window.scrollY);
    };
    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
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
  console.log(toggleMenu);
  return (
    <>
      <nav className={navbarClass}>
        <div>
          <CustomLink to="/">
            <img src={logo} alt="Music logo" />
          </CustomLink>
        </div>
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
          <div className={classes.hamburger}>
            <CSSTransition
              in={!toggleMenu}
              mountOnEnter
              unmountOnExit
              timeout={200}
              classNames={{
                enterActive: classes["ham-enter-active"],
                enter: classes["ham-enter"],
                exit: classes["ham-exit"],
                exitActive: classes["ham-exit-active"],
              }}
            >
              <div className={classes.box}>
                <Threelines className={classes.threeLines} />
              </div>
            </CSSTransition>
            <CSSTransition
              in={toggleMenu}
              mountOnEnter
              unmountOnExit
              timeout={200}
              classNames={{
                enterActive: classes["ham-enter-active"],
                enter: classes["ham-enter"],
                exit: classes["ham-exit"],
                exitActive: classes["ham-exit-active"],
              }}
            >
              <div className={classes.box}>
                <CrossSVG className={classes.crossSVG} />
              </div>
            </CSSTransition>
          </div>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
