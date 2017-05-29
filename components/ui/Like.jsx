import React from 'react';

const Like = ({likes, like, id}) => (
  <button onClick={(e) => like(id)}>Like! ({likes})</button>
);

Like.propTypes = {
  likes: PropTypes.number,
  id: PropTypes.number.isRequired,
  like: PropTypes.func.isRequired
};

Like.defaultProps = {
  likes: 0
};

export default Like;
