import React, { FC } from "react";

import classes from "./LoadingSpinner.module.scss";

const LoadingSpinner: FC<{ asOverlay?: boolean }> = ({ asOverlay }) => {
  return (
    <div className={`${asOverlay && classes.loadingSpinner__overlay}`}>
      <div className={classes.ldsEllipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
