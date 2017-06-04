import React from 'react';
import Image from './Image.jsx';
import MetaBlock from './MetaBlock.jsx';
import Like from './Like.jsx';

const BlogItem = ({id, text, image, meta, like, likes}) => (
  <div>
    <Image {...image} />
    <br/>
    <span>{text}</span>
    <Like like={like} likes={likes} id={id}/>
    <MetaBlock {...meta}/>
    <hr/>
  </div>
);

BlogItem.propTypes = {
  text: PropTypes.string,
  image: PropTypes.object,
  meta: PropTypes.object,
  like: PropTypes.func.isRequired,
  likes: PropTypes.number
};

BlogItem.defaultProps = {
  text: 'Text is not provided',
  image: { src: 'images/empty_photo.jpg', alt: 'Empty photo' }
};


export default BlogItem;
