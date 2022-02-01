import classes from "./ArtistsSlideIn.module.scss";

import ArtistsContainer from "./ArtistsContainer";
import * as jsonData from "../../json/Artists.json";
const artists = jsonData;

const ArtistsSlideIn = () => {
  return (
    <div className={classes.background}>
      <ArtistsContainer slideDir="left" artist={artists.Eminem} />
      <ArtistsContainer slideDir="right" artist={artists.IceCube} />
      <ArtistsContainer slideDir="left" artist={artists.FreddieMercury} />
      <ArtistsContainer slideDir="right" artist={artists.KanyeWest} />
    </div>
  );
};
export default ArtistsSlideIn;
