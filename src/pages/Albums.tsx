import { useEffect, useState } from "react";
import { Credentials } from "../shared/Credentials";
import axios from "axios";
import Dropdown from "../components/VinylComponents/Dropdown";
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
  const [tracks, setTracks] = useState({
    selectedTrack: "",
    listOfTracksFromAPI: [],
  });
  const [trackLoad, setTrackLoad] = useState(false);
  useEffect(() => {
    const SpotifyApi = async () => {
      const response = await axios("https://accounts.spotify.com/api/token", {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " + btoa(spotify.ClientId + ":" + spotify.ClientSecret),
        },

        data: "grant_type=client_credentials",
        // {
        //   grant_type: "client_credentials",
        //   scope:
        //     "playlist-modify-private user-library-read streaming user-read-email user-read-private, user-read-playback-state user-modify-playback-state",
        // },
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
    setTracks({
      selectedTrack: tracks.selectedTrack,
      listOfTracksFromAPI: tracksResponse.data.items.slice(0, 9),
    });
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
            <VinylContainer tracksData={tracks.listOfTracksFromAPI} />
          )}
        </div>
      </form>
    </div>
  );
};

export default Albums;
