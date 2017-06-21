import React from 'react';
import PropTypes from 'prop-types';
import MoviePage from '../containers/MoviePage';

const MovieShow = ({ match }) => {
  const id = match.params.id;
  return <MoviePage id={id} />;
};

MovieShow.propTypes = {
  match: PropTypes.object.isRequired,
};

export default MovieShow;
