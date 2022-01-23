import classes from "./Vinyl.module.scss";
import vinylImage from "../../img/vinyl.png";
import { Link } from "react-router-dom";
interface VinylProps {
  id: string;
  coverUrl: string;
  albumTitle: string;
  artist: string;
  details: object;
}

export const Vinyl: React.FC<VinylProps> = ({
  coverUrl,
  albumTitle,
  artist,
  id,
  details,
}) => {
  return (
    <Link state={details} to={`/albums/${id}`} className={classes.link}>
      <div className={classes.singleDisk}>
        <img
          src={
            coverUrl ||
            "https://millennialdiyer.com/wp1/wp-content/uploads/2018/11/Tips-Tricks-for-Assigning-Album-Cover-Art-to-your-Music-Library-Default-Image.jpg"
          }
          alt="cover"
          className={classes.vinylCover}
        />
        <div className={classes.vinylMainColor}>
          <img className={classes.vinylImage} src={vinylImage} alt="vinyl" />
          <div
            style={{ backgroundImage: `url(${coverUrl})` }}
            className={classes.vinylDiskImage}
          />
        </div>
        <div className={classes.tags}>
          <h1 style={{ color: "white" }}>{albumTitle}</h1>

          <p>{artist}</p>
        </div>
      </div>
    </Link>
  );
};

export default Vinyl;
