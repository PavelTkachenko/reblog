import React from 'react';
import PropTypes from 'prop-types';
import { Button, Intent } from '@blueprintjs/core';

const Like = ({ likes, like, id }) => (
  <Button
    className="pt-minimal"
    onClick={() => like(id)}
    iconName="heart"
    text={likes}
    intent={likes > 0 ? Intent.DANGER : null}
  />
);

Like.propTypes = {
  likes: PropTypes.number,
  id: PropTypes.number.isRequired,
  like: PropTypes.func.isRequired,
};

Like.defaultProps = {
  likes: 0,
};

export default Like;
