import React from 'react';
import PropTypes from 'prop-types';

const Image = props => (
  <img {...props} />
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

Image.defaultProps = {
  alt: 'No alt provided',
};

export default Image;
