import React from 'react';
import PropTypes from 'prop-types';

const MarginBlock = props => (
  <div style={{ margin: props.margin }}>{props.children}</div>
);

export default MarginBlock;
