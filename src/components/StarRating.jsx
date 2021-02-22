import React from 'react';

import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarOutlineIcon from '@material-ui/icons/StarOutline';

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<StarIcon color='primary' />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<StarHalfIcon />);
    } else {
      stars.push(<StarOutlineIcon />);
    }
  }
  return <>{stars}</>;
};

export default StarRating;
