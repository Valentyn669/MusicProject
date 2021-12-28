import classes from "./Navbar.module.scss";
import logo from "../img/logo.png";
interface NavbarProps {
  toElement: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ toElement }) => {
  return (
    <nav className={classes.navbar}>
      <img src={logo} alt="Music logo" />
      <ul className={classes.menuList}>
        <li onClick={toElement}>Blog</li>
        <li>About</li>
        <li>Something</li>
        <li>Contact</li>
        <li>Order</li>
      </ul>
    </nav>
  );
};

export default Navbar;
