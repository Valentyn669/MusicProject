import classes from "./ArtistsSlideIn.module.scss";
import ArtistImage from "./ArtistImage";
import { FC } from "react";
const ArtistsContainer: FC<{
  artist: {
    header: string;
    image: string;
    text: string[];
  };
  slideDir: "left" | "right";
}> = ({ artist, slideDir }) => {
  const { header, image, text } = artist;
  return (
    <div className={classes.container}>
      <div className={classes.innerArtist}>
        <h1>{header}</h1>
        <ArtistImage slideDir={slideDir} src={image} />
        {text.map((txt: string, i: number) => (
          <p key={i}>{txt}</p>
        ))}
      </div>
    </div>
  );
};
export default ArtistsContainer;
