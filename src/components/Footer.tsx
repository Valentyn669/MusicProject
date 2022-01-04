import classes from "./Footer.module.scss";
import logo from "../img/logo.png";
import { ReactComponent as Facebook } from "../img/socials/facebook.svg";
import { ReactComponent as Instagram } from "../img/socials/instagram.svg";
import { ReactComponent as Tiktok } from "../img/socials/tiktok.svg";
import { ReactComponent as Twitter } from "../img/socials/twitter.svg";
import { ReactComponent as Youtube } from "../img/socials/youtube.svg";

export const Footer: React.FC = () => {
  return (
    <>
      <footer className={classes.footer}>
        <div className={classes.main}>
          <img src={logo} alt="logo" />
          <ul>
            <li>
              <h2>Blog</h2>
            </li>
            <p>Address: Chernivtsi, Holovna St, 1</p>
          </ul>
          <ul>
            <li>
              <h2>Artists</h2>
            </li>
            <li>
              <h2>Albums</h2>
            </li>
          </ul>
          <ul>
            <li>
              <h2>Contact</h2>
            </li>
            <li>
              <h2>Order</h2>
            </li>
          </ul>
        </div>
        <div className={classes.line} />
        <div className={classes.socials}>
          <ul>
            <li>
              <a href="facebook">
                <Facebook />
              </a>
              <a href="instagram">
                <Instagram />
              </a>
              <a href="youtube">
                <Youtube />
              </a>
              <a href="tiktok">
                <Tiktok />
              </a>
              <a href="twitter">
                <Twitter />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
