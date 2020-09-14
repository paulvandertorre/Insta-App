import React from "react";
import { useFeedPostSkeletonStyles } from "../../styles";

const FeedPostSkeleton = () => {
  const classes = useFeedPostSkeletonStyles();

  return (
    <div classes={classes.container}>
      <div className={classes.headerSkeleton}>
        <div className={classes.avatarSkeleton} />
        <div className={classes.headerTextSkeleton}>
          <div className={classes.primaryTextSkeleton} />
          <div className={classes.secondaryTextSkeleton} />
        </div>
      </div>
      <div className={classes.mediaSkeleton} />
    </div>
  )
}

export default FeedPostSkeleton;
