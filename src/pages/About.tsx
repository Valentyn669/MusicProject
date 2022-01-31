import classes from "./About.module.scss";
export const About: React.FC = () => {
  return (
    <div className={classes.aboutContainer}>
      <div className={classes.about}>
        <h1>About:</h1>
        <p>Music Bands is a great hub for music enthusiast!</p>
        <p>
          We champion curiosity and believe that everyone has music knowledge to
          share: insights, intel, and musings that make us more informed,
          engaged music lovers.
        </p>
        <p>
          As the world's biggest music encyclopedia with a passionate community
          of more than two million contributors, Music Bands is a destination
          for artists, creatives, and superfans to discuss and deconstruct all
          things music.
        </p>
        <p>
          Through our original content, technology, and live & virtual
          experiences, Genius spotlights the artists who are shaping music
          culture across every genre and musical discipline, sharing the stories
          behind their creativity and craft in their own words.
        </p>
      </div>
    </div>
  );
};

export default About;
