import Vinyl from "./Vinyl";
import classes from "./Vinyl-Container.module.scss";

interface databaseProps {
  artistsDatabase: {
    artists: {
      coverUrl: string;
      albumTitle: string;
      artist: string;
    }[];
  };
}

export const VinylContainer: React.FC<databaseProps> = ({
  artistsDatabase,
}) => {
  return (
    <div className={classes.container}>
      {artistsDatabase.artists.map((data) => (
        <Vinyl
          key={data.coverUrl}
          coverUrl={data.coverUrl}
          albumTitle={data.albumTitle}
          artist={data.artist}
        />
      ))}
    </div>
  );
};

export default VinylContainer;
