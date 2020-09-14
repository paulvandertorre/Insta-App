import React from "react";
import { useGridPostStyles } from "../../styles";
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const GridPost = ({ post }) => {
  const history = useHistory();
  const classes = useGridPostStyles();

  const handleOpenPostModal = () => {
    // dit pusht naar een nieuwe route
    history.push({
      pathname: `/p/${post.id}`,
      // hiermee geven we aan dat we het modal willen tonen
      state: { modal: true }
    })
  }

  return (
    <div onClick={handleOpenPostModal} className={classes.gridPostContainer}>
      <div className={classes.gridPostOverlay}>
        <div className={classes.gridPostInfo}>
          <span className={classes.likes} />
          <Typography>
            {post.likes}
          </Typography>
        </div>
        <div className={classes.gridPostInfo}>
          <span className={classes.comments} />
          <Typography>
            {post.comments.length}
          </Typography>
        </div>
      </div>
      <img src={post.media} alt='post cover' className={classes.image} />
    </div>
  )
}

export default GridPost;
