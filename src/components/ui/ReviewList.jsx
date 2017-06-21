import React from 'react';
import PropTypes from 'prop-types';
import ReviewPreview from './ReviewPreview';

const ReviewList = ({ reviews }) => (
  <div>
    {reviews.map(review => <ReviewPreview key={review.id} {...review} />)}
  </div>
);

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewList;
