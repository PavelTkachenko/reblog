import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@blueprintjs/core';

const MetaBlock = ({ author }) => (
  <div style={{ float: 'right' }}>
    <Button
      text={author}
      className="pt-minimal"
    />
  </div>
);

MetaBlock.propTypes = {
  author: PropTypes.string,
};

MetaBlock.defaultProps = {
  author: 'Anonymous',
};

export default MetaBlock;
