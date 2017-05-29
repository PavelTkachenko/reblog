import React from 'react';
import BlogItem from './BlogItem.jsx'

const BlogList = ({items, like}) => (
  <div>
    { items.map((item) => <BlogItem {...item} key={item.id} like={like}/>) }
  </div>
);

BlogItem.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  like: PropTypes.func.isRequired,
};

export default BlogList;
