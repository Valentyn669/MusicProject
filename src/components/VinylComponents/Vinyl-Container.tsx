import Vinyl from "./Vinyl";
import classes from "./Vinyl-Container.module.scss";

interface databaseProps {
  tracksData: {
    album: {
      id: string;
      uri: string;
      images: [{ url: string }];
      name: string;
      artists: [{ name: string }];
    };
  }[];
}
export const VinylContainer: React.FC<databaseProps> = ({ tracksData }) => {
  return (
    <div className={classes.container}>
      {tracksData.map((data: any) => {
        if (data.track === null) {
          return <></>;
        } else {
          return (
            <Vinyl
              key={data.track.id}
              id={data.track.id}
              coverUrl={data.track.album.images[0].url}
              albumTitle={data.track.album.name}
              artist={data.track.album.artists[0].name}
              details={data.track}
            />
          );
        }
      })}
    </div>
  );
};

export default VinylContainer;
