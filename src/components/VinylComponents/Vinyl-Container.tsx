import Vinyl from "./Vinyl";
import classes from "./Vinyl-Container.module.scss";

interface databaseProps {
  tracksData: {
    album: {
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
        return (
          <Vinyl
            key={data.track.id}
            coverUrl={data.track.album.images[0].url}
            albumTitle={data.track.album.name}
            artist={data.track.album.artists[0].name}
          />
        );
      })}

      {/* <Vinyl
        key={artistsDatabase.album.uri}
        coverUrl={artistsDatabase.album.images[0].url}
        albumTitle={artistsDatabase.album.name}
        artist={artistsDatabase.album.artists[0].name}
      /> */}
    </div>
  );
};

export default VinylContainer;
