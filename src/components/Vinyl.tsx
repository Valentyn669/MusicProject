import classes from "./Vinyl.module.scss";
import vinylImage from "../img/vinyl.png";

interface VinylProps {
  coverUrl?: string;
  vinylColor?: string;
  albumTitle: string;
  artist: string;
}

export const Vinyl: React.FC<VinylProps> = ({
  coverUrl,
  vinylColor,
  albumTitle,
  artist,
}) => {
  return (
    <div className={classes.singleDisk}>
      <img
        src={
          coverUrl ||
          "https://millennialdiyer.com/wp1/wp-content/uploads/2018/11/Tips-Tricks-for-Assigning-Album-Cover-Art-to-your-Music-Library-Default-Image.jpg"
        }
        alt="cover"
        className={classes.vinylCover}
      ></img>
      <div className={classes.vinylMainColor}>
        <img className={classes.vinylImage} src={vinylImage} alt="vinyl" />
        <div
          style={{ backgroundColor: `${vinylColor || "white"}` }}
          className={classes.vinylColor}
        ></div>
      </div>
      <div className={classes.tags}>
        <h1>{albumTitle}</h1>
        <p>{artist}</p>
      </div>
    </div>
  );
};

export default Vinyl;
