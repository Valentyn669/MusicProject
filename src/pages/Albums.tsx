import { useEffect, useState } from "react";
import { Credentials } from "../shared/Credentials";
import axios from "axios";
import Dropdown from "../components/Dropdown";
import VinylContainer from "../components/VinylComponents/Vinyl-Container";
import classes from "./Albums.module.scss";
import LoadingSpinner from "../shared/LoadingSpinner";
export const Albums: React.FC = () => {
  const spotify = Credentials();
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
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
      const response = await axios("https://accounts.spotify.com/api/token", {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " + btoa(spotify.ClientId + ":" + spotify.ClientSecret),
        },

        data: "grant_type=client_credentials",
        method: "POST",
      });

      setToken(response.data.access_token);

      const genresResponse = await axios(
        "https://api.spotify.com/v1/browse/categories",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + response.data.access_token,
          },
        }
      );

      setGenres({
        selectedGenre: genres.selectedGenre,
        listOfGenresFromAPI: genresResponse.data.categories.items,
      });
    };
    SpotifyApi();
  }, [genres.selectedGenre, spotify.ClientId, spotify.ClientSecret]);

  const genreChanged = async (val: string) => {
    setGenres({
      selectedGenre: val,
      listOfGenresFromAPI: genres.listOfGenresFromAPI,
    });

    const playlistResponse = await axios(
      `https://api.spotify.com/v1/browse/categories/${val}/playlists?limit=10`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
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

    const tracksResponse = await axios(
      `https://api.spotify.com/v1/playlists/${playlist.selectedPlaylist}/tracks?limit=10`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    setTracks(tracksResponse.data.items.slice(0, 9));
    setTrackLoad(true);
    setLoading(false);
  };

  return (
    <div className="container">
      <form onSubmit={buttonClicked} className={classes.albumForm}>
        <div className={classes.formContainer}>
          <Dropdown
            label="Genre :"
            options={genres.listOfGenresFromAPI}
            selectedValue={genres.selectedGenre}
            changed={genreChanged}
          />
          <Dropdown
            label="Playlist :"
            options={playlist.listOfPlaylistFromAPI}
            selectedValue={playlist.selectedPlaylist}
            changed={playlistChanged}
          />
          <div className={classes.buttonContainer}>
            <button type="submit" className={classes.Dropdownbutton}>
              Search
            </button>
          </div>
        </div>
        {loading && (
          <div className="center">
            <LoadingSpinner />
          </div>
        )}
        <div>
          {!loading && trackLoad && (
            <VinylContainer
              tracksData={(tracks.length !== 0 && tracks) || tracksData}
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default Albums;
