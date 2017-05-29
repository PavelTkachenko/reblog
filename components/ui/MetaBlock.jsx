import React from 'react';
import moment from 'moment';

const MetaBlock = ({created_at, updated_at, author}) => (
  <small>
    <ul>
      <li>Author: {author}</li>
      <li>Created at: {moment(created_at).fromNow()}</li>
      <li>Updated at: {moment(updated_at).fromNow()}</li>
    </ul>
  </small>
);

MetaBlock.propTypes = {
  created_at: PropTypes.string,
  updated_at: PropTypes.string,
  author: PropTypes.string
};

MetaBlock.defaultProps = {
  created_at: '1970-01-01T00:00:00.000Z',
  updated_at: '1970-01-01T00:00:00.000Z',
  author: 'Anonymous'
};

export default MetaBlock;
