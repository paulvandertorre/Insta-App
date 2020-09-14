import React from "react";
import { useProfilePictureStyles } from "../../styles";
import { Person } from '@material-ui/icons';

const ProfilePicture = ({
  size,
  image = 'https://scontent-amt2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/117867000_1037144140074273_609545399369336983_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&_nc_cat=109&_nc_ohc=BHAuTl5iD1sAX_xPNme&oh=4195233e77395c347b9166c599bb35eb&oe=5F866704',
  isOwner
}) => {
  const classes = useProfilePictureStyles({ isOwner, size });

  return (
    <section className={classes.section}>
      {image ? (
        <div className={classes.wrapper}>
          <img src={image} alt='user profiel' className={classes.image} />
        </div>
      ) : (
          <div className={classes.wrapper}>
            <Person className={classes.person} />
          </div>
        )}
    </section>
  )
}

export default ProfilePicture;
