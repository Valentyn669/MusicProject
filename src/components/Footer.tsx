import classes from "./Footer.module.scss";
import logo from "../img/logo.png";
import { ReactComponent as Facebook } from "../img/socials/facebook.svg";
import { ReactComponent as Instagram } from "../img/socials/instagram.svg";
import { ReactComponent as Tiktok } from "../img/socials/tiktok.svg";
import { ReactComponent as Twitter } from "../img/socials/twitter.svg";
import { ReactComponent as Youtube } from "../img/socials/youtube.svg";
import CustomLink from "./CustomLink";
export const Footer: React.FC = () => {
  return (
    <>
      <footer className={classes.footer}>
        <div className={classes.main}>
          <img src={logo} alt="logo" />
          <ul>
            <CustomLink to="/blog">Blog</CustomLink>
            <p>Address: Chernivtsi, Holovna St, 1</p>
          </ul>
          <ul>
            <CustomLink to="/artists">Artists</CustomLink>
            <CustomLink to="/albums">Albums</CustomLink>
          </ul>
          <ul>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>
          </ul>
        </div>
        <div className={classes.line} />
        <div className={classes.socials}>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://www.facebook.com/theweeknd"
                rel="noreferrer"
              >
                <Facebook />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/kanyewest"
                rel="noreferrer"
              >
                <Instagram />
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/user/DrakeOfficial"
                rel="noreferrer"
              >
                <Youtube />
              </a>
              <a
                target="_blank"
                href="https://www.tiktok.com/@postmalone"
                rel="noreferrer"
              >
                <Tiktok />
              </a>
              <a
                target="_blank"
                href="https://twitter.com/denzelcurry"
                rel="noreferrer"
              >
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
