import { useLocation } from "react-router";
import classes from "./AlbumDetails.module.scss";
import { ReactComponent as Spotify } from "../img/spotify.svg";
export const AlbumDetails = () => {
  let data: any = useLocation();

  let ms = data.state.duration_ms;
  let min = Math.floor((ms / 1000 / 60) << 0);
  let sec = Math.floor((ms / 1000) % 60);
  let time = `${min}:${sec < 10 ? "0" + sec : sec}`;

  const songAlbums =
    data.state.album.name === data.state.name ? (
      <h2>Song: {data.state.name}</h2>
    ) : (
      <>
        <h2>Album: {data.state.album.name}</h2>
        <h2>Song: {data.state.name}</h2>
      </>
    );
  return (
    <>
      <div className={classes.container}>
        <div
          className={classes.bgImg}
          style={{
            backgroundImage: `url(${data.state.album.images[0].url})`,
          }}
        />

        {songAlbums}
        <img src={data.state.album.images[0].url} alt={data.state.name} />
        <h2>Artist: {data.state.artists[0].name}</h2>
        <p>Duration: {time}</p>
        <a
          href={data.state.album.external_urls.spotify}
          target="_blank"
          rel="noreferrer"
        >
          Check on:
          <p>
            <Spotify />
          </p>
        </a>
      </div>
    </>
  );
};

export default AlbumDetails;
