import React from 'react';
import PropTypes from 'prop-types';

const MarginBlock = props => (
  <div style={{ margin: props.margin }}>{props.children}</div>
);

MarginBlock.propTypes = {
  margin: PropTypes.string,
  children: PropTypes.element.isRequired,
};

MarginBlock.defaultProps = {
  margin: '0',
};

export default MarginBlock;
