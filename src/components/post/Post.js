import React from "react";
import { usePostStyles } from "../../styles";
import UserCard from '../shared/UserCard';
import { MoreIcon, CommentIcon, ShareIcon, UnlikeIcon, LikeIcon, RemoveIcon, SaveIcon } from '../../icons';
import { Link } from 'react-router-dom';
import { Typography, Button, Hidden, Divider, TextField } from '@material-ui/core';
import OptionsDialog from './../shared/OptionsDialog';
import { defaultPost } from './../../data';
import PostSkeleton from './PostSkeleton';

const Post = () => {
  const classes = usePostStyles();
  const [loading, setLoading] = React.useState(true);
  const [showOptionsDialog, setOptionsDialog] = React.useState(false)
  const { id, media, likes, user, caption, comments } = defaultPost;

  setTimeout(() => setLoading(false), 1000)
  if(loading) return <PostSkeleton />

  return (
    <div className={classes.postContainer}>
      <article
        className={classes.article}
      >
        {/* Post Header */}
        <div className={classes.postHeader}>
          <UserCard user={user} avatarSize={32} />
          <MoreIcon
            className={classes.moreIcon}
            onClick={() => setOptionsDialog(true)}
          />
        </div>
        {/* Post Image */}
        <div className={classes.postImage}>
          <img src={media} alt='post media' className={classes.image} />
        </div>
        {/* Post Buttons */}
        <div className={classes.postButtonsWrapper}>
          <div className={classes.postButtons}>
            <LikeButton />
            <Link to={`/p/${id}`}>
              <CommentIcon />
            </Link>
            <ShareIcon />
            <SaveButton />
          </div>
          <Typography className={classes.likes} variant='subtitle2'>
            <span>{likes === 1 ? '1 like' : `${likes} likes`}</span>
          </Typography>
          <div className={classes.postCaptionContainer}>
            <Typography
              variant='body2'
              component='span'
              className={classes.postCaption}
              dangerouslySetInnerHTML={{ __html: caption }}
            />
          </div>
          {comments.map(comment => (
            <div key={comment.id}>
              <Link to={`/${comment.user.username}`}>
                <Typography
                  variant='subtitle2'
                  component='span'
                  className={classes.commentUsername}
                >
                  {comment.user.username}
                </Typography>
                {' '}
                <Typography
                  variant='body2'
                  component='span'
                >
                  {comment.contet}
                </Typography>
              </Link>
            </div>
          ))}
          <Typography
            color='textSecondary'
            className={classes.datePosted}
          >
            5 DAYS AGO
          </Typography>
          <Hidden xsDown>
            <div className={classes.comment}>
              <Divider />
              <Comment />
            </div>
          </Hidden>
        </div>
      </article>
      {showOptionsDialog && <OptionsDialog onClose={() => setOptionsDialog(false)} />}
    </div>
  )
}

const LikeButton = () => {
  const classes = usePostStyles();
  const [liked, setLiked] = React.useState(false);
  const Icon = liked ? UnlikeIcon : LikeIcon;
  const className = liked ? classes.liked : classes.like;

  const handleLike = () => {
    console.log('like');
    setLiked(true);
  }

  const handleUnlike = () => {
    console.log('unlike');
    setLiked(false);
  }

  const onClick = liked ? handleUnlike : handleLike;

  return <Icon className={className} onClick={onClick} />
}

const SaveButton = () => {
  const classes = usePostStyles();
  const [saved, setSaved] = React.useState(false);
  const Icon = saved ? RemoveIcon : SaveIcon;

  const handleSave = () => {
    console.log('save');
    setSaved(true);
  }

  const handleRemove = () => {
    console.log('remove');
    setSaved(false);
  }

  const onClick = saved ? handleRemove : handleSave;

  return <Icon className={classes.saveIcon} onClick={onClick} />
}

const Comment = () => {
  const classes = usePostStyles();
  const [content, setContent] = React.useState('')

  return (
    <div className={classes.commentContainer}>
      <TextField
        fullWidth
        value={content}
        placeholder='Add a comment...'
        multiline
        rowsMax='2'
        className={classes.textField}
        rows={1}
        onChange={event => setContent(event.target.value)}
        InputProps={{
          classes: {
            root: classes.root,
            underline: classes.underline
          }
        }}
      />
      <Button
        color='primary'
        className={classes.commentButton}
        disabled={!content.trim()}
      >
        Post
      </Button>
    </div>
  )
}

export default Post;
