import ArtistsSlideIn from "../components/MainCompoents/ArtistsSlideIn";
import logo from "../img/logo.png";
import classes from "./Main.module.scss";
export const Main: React.FC = () => {
  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.mainText}>
          <div className={classes.musicLogo}>
            <img src={logo} alt="Logo" />
            <p>USIC</p>
          </div>
          <div className={`${classes.musicLogo} ${classes.bandsText}`}>
            <p>BANDS</p>
          </div>
        </div>
      </div>
      <ArtistsSlideIn />
    </>
  );
};

export default Main;
