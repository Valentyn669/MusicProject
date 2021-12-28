import classes from "./Main.module.scss";
export const Main: React.FC = () => {
  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.mainText}>MUSIC BANDS</div>
      </div>
    </>
  );
};

export default Main;
