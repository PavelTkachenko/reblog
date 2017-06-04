import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Button, Intent } from '@blueprintjs/core';

const MetaBlock = ({ created_at, updated_at, author }) => (
  <div style={{ float: 'right' }}>
    <Button
      text={author}
      className="pt-minimal"
    />
    {/* <li>Created at: {moment(created_at).fromNow()}</li>
      <li>Updated at: {moment(updated_at).fromNow()}</li> */}
  </div>
);

MetaBlock.propTypes = {
  created_at: PropTypes.string,
  updated_at: PropTypes.string,
  author: PropTypes.string,
};

MetaBlock.defaultProps = {
  created_at: '1970-01-01T00:00:00.000Z',
  updated_at: '1970-01-01T00:00:00.000Z',
  author: 'Anonymous',
};

export default MetaBlock;
