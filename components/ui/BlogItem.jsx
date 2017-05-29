import React from 'react';
import Image from './Image.jsx';
import MetaBlock from './MetaBlock.jsx';

const BlogItem = ({text, image, meta}) => (
  <div>
    <Image {...image} />
    <br/>
    <span>{text}</span>
    <MetaBlock {...meta}/>
    <hr/>
  </div>
);

BlogItem.propTypes = {
  text: PropTypes.string,
  image: PropTypes.object,
  meta: PropTypes.object
};

BlogItem.defaultProps = {
  text: 'Text is not provided',
  image: { src: 'images/empty_photo.jpg', alt: 'Empty photo'
};


export default BlogItem;
