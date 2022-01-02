import classes from "./Navbar.module.scss";
import logo from "../img/logo.png";
import { ReactComponent as Threelines } from "../img/threelines.svg";
import { useEffect, useState } from "react";
interface NavbarProps {
  toElement: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ toElement }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <>
      <nav className={classes.navbar}>
        <img src={logo} alt="Music logo" />
        {(toggleMenu || screenWidth > 700) && (
          <ul className={classes.menuList}>
            <li onClick={toElement}>Blog</li>
            <li>About</li>
            <li>Something</li>
            <li>Contact</li>
            <li>Order</li>
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
