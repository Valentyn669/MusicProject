const Credentials = () => {
  return {
    ClientId: process.env.REACT_APP_SPOTIFY_ID,
    ClientSecret: process.env.REACT_APP_SPOTIFY_SECRET,
  };
};

export { Credentials };
