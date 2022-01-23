import { useLocation } from "react-router";
import classes from "./AlbumDetails.module.scss";
export const AlbumDetails = () => {
  let data: any = useLocation();
  console.log(data.state.artists.type);
  return (
    <div className={classes.container}>
      <h1>{data.state.name}</h1>
      <p>
        {data.state.artists[0].type}: {data.state.artists[0].name}
      </p>
    </div>
  );
};

export default AlbumDetails;
