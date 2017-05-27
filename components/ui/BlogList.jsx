import React from 'react';
import BlogItem from './BlogItem.jsx'

const BlogList = ({items}) => (
  <div>
    { items.map((item) => <BlogItem {...item} key={item.id} />) }
  </div>
);

BlogItem.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default BlogList;
import React from 'react';

const Image = (props) => (
  <img {...props} />
);

Image.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string
};

Image.defaultProps = {
  width: '100px',
  height: '100px'
};

export default Image;
