import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import BlogItem from './BlogItem';

const BlogList = ({ items, like }) => (
  <div>
    <Masonry> { items.map(item => <BlogItem {...item} key={item.id} like={like} />) }</Masonry>
  </div>
);

BlogList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  like: PropTypes.func.isRequired,
};

BlogList.defaultProps = {
  items: [],
};

export default BlogList;
