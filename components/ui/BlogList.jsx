import React from 'react';
import BlogItem from './BlogItem.jsx'

const BlogList = ({items}) => (
  <div>
    { items.map((item, key) => <BlogItem key={key} {...item} />) }
  </div>
);

export default BlogList;
