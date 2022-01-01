import Vinyl from "./Vinyl";
import classes from "./Vinyl-Container.module.scss";

export const VinylContainer: React.FC = () => {
  return (
    <div className={classes.container}>
      <Vinyl
        coverUrl="https://vinyla.com/files/products/kanye-west-the-college-dropout.280x280.png?bd88246eab05f09b003e1f97b6ce0ad9"
        vinylColor="brown"
        albumTitle="The College Dropout"
        artist="Kanye West"
      />
      <Vinyl
        coverUrl="https://upload.wikimedia.org/wikipedia/en/8/84/StraightOuttaComptonN.W.A..jpg"
        vinylColor="lightblue"
        albumTitle="Straight Outta Compton"
        artist="N.W.A."
      />
      <Vinyl
        coverUrl="https://www.revolvermag.com/sites/default/files/media/section-media/master_cover.jpg"
        vinylColor="#d9480f"
        albumTitle="Master of Puppets"
        artist="Metallica"
      />
    </div>
  );
};

export default VinylContainer;
