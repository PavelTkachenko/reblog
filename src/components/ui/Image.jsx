import React from 'react';
import PropTypes from 'prop-types';

const Image = props => (
  <img
    style={{ width: '100%' }}
    src={props.src}
    alt={props.alt}
  />
);

Image.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Image.defaultProps = {
  src: 'No alt provided',
};

export default Image;
