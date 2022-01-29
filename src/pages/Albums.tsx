import { useEffect, useState } from "react";
import { Credentials } from "../shared/Credentials";
import Dropdown from "../components/Dropdown";
import VinylContainer from "../components/VinylComponents/Vinyl-Container";
import classes from "./Albums.module.scss";
import LoadingSpinner from "../shared/LoadingSpinner";
import Button from "../shared/Button";
import { useHttpClient } from "../hooks/http-hook";
import ErrorModal from "../shared/Modal/ErrorModal";
export const Albums: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { error, sendRequest, clearError } = useHttpClient();
  const spotify = Credentials();
  const [token, setToken] = useState("");

  const [genres, setGenres] = useState({
    selectedGenre: "",
    listOfGenresFromAPI: [],
  });

  const [playlist, setPlaylist] = useState({
    selectedPlaylist: "",
    listOfPlaylistFromAPI: [],
  });
  const [trackLoad, setTrackLoad] = useState(false);

  const [tracks, setTracks] = useState<any[]>([]);
  let tracksData = [];
  if (tracks.length !== 0 || localStorage.getItem("Albums") === null) {
    localStorage.setItem("Albums", JSON.stringify(tracks));
  } else {
    tracksData = JSON.parse(localStorage["Albums"]);
  }
  useEffect(() => {
    if (window.localStorage["Albums"].length > 2) {
      setTrackLoad(true);
    }
  }, []);

  useEffect(() => {
    const SpotifyApi = async () => {
      const response = await sendRequest(
        "https://accounts.spotify.com/api/token",
        "POST",
        "grant_type=client_credentials",
        {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " + btoa(spotify.ClientId + ":" + spotify.ClientSecret),
        }
      );

      setToken(response.data.access_token);

      const genresResponse = await sendRequest(
        "https://api.spotify.com/v1/browse/categories",
        "GET",
        null,
        {
          Authorization: "Bearer " + response.data.access_token,
        }
      );

      setGenres({
        selectedGenre: genres.selectedGenre,
        listOfGenresFromAPI: genresResponse.data.categories.items,
      });
    };
    SpotifyApi();
  }, [
    genres.selectedGenre,
    sendRequest,
    spotify.ClientId,
    spotify.ClientSecret,
  ]);

  const genreChanged = async (val: string) => {
    setGenres({
      selectedGenre: val,
      listOfGenresFromAPI: genres.listOfGenresFromAPI,
    });

    const playlistResponse = await sendRequest(
      `https://api.spotify.com/v1/browse/categories/${val}/playlists?limit=10`,
      "GET",
      null,
      { Authorization: "Bearer " + token }
    );
    setPlaylist({
      selectedPlaylist: playlist.selectedPlaylist,
      listOfPlaylistFromAPI: playlistResponse.data.playlists.items,
    });
  };

  const playlistChanged = (val: string) => {
    setPlaylist({
      selectedPlaylist: val,
      listOfPlaylistFromAPI: playlist.listOfPlaylistFromAPI,
    });
  };

  const buttonClicked = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    const tracksResponse = await sendRequest(
      `https://api.spotify.com/v1/playlists/${playlist.selectedPlaylist}/tracks?limit=9`,
      "GET",
      null,
      {
        Authorization: "Bearer " + token,
      }
    );
    setTracks(tracksResponse.data.items);
    setTrackLoad(true);
    setLoading(false);
  };

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      <form onSubmit={buttonClicked} className={classes.albumForm}>
        <div className={classes.formContainer}>
          <Dropdown
            label="Genre"
            options={genres.listOfGenresFromAPI}
            selectedValue={genres.selectedGenre}
            changed={genreChanged}
          />
          <Dropdown
            label="Playlist"
            options={playlist.listOfPlaylistFromAPI}
            selectedValue={playlist.selectedPlaylist}
            changed={playlistChanged}
          />
          <div className={classes.buttonContainer}>
            <Button disabled={!playlist.selectedPlaylist} type="submit">
              Search
            </Button>
          </div>
        </div>
      </form>
      {loading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.vinylContainer}>
        {!loading && trackLoad && (
          <VinylContainer
            tracksData={(tracks.length !== 0 && tracks) || tracksData}
          />
        )}
      </div>
    </>
  );
};

export default Albums;
