interface databaseProps {
  artists: {
    coverUrl: string;
    albumTitle: string;
    artist: string;
  }[];
}

export const artistsDatabase: databaseProps = {
  artists: [
    {
      coverUrl:
        "https://vinyla.com/files/products/kanye-west-the-college-dropout.280x280.png?bd88246eab05f09b003e1f97b6ce0ad9",

      albumTitle: "The College Dropout",
      artist: "Kanye West",
    },
    {
      coverUrl:
        "https://upload.wikimedia.org/wikipedia/en/8/84/StraightOuttaComptonN.W.A..jpg",
      albumTitle: "Straight Outta Compton",
      artist: "N.W.A.",
    },
    {
      coverUrl:
        "https://www.revolvermag.com/sites/default/files/media/section-media/master_cover.jpg",
      albumTitle: "Master of Puppets",
      artist: "Metallica",
    },
  ],
};
