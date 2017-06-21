import React from 'react';
import PropTypes from 'prop-types';
import ReviewPage from '../containers/ReviewPage';

const ReviewShow = ({ match }) => {
  const id = match.params.id;
  return <ReviewPage id={id} />;
};

ReviewShow.propTypes = {
  match: PropTypes.object.isRequired,
};

export default ReviewShow;
