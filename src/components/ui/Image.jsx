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
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

Image.defaultProps = {
  alt: 'No alt provided',
};

export default Image;
