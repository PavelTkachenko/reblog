import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import MetaBlock from './MetaBlock';
import MarginBlock from './MarginBlock';
import Like from './Like';

const style = {
  margin: '20px',
  padding: '20px',
  width: '330px',
  backgroundColor: '#fff',
  MozBoxShadow: '1px 2px 20px 1px #d3d3d3',
  WebkitBoxShadow: '1px 2px 20px 1px #d3d3d3',
  BoxShadow: '1px 2px 20px 1px #d3d3d3',
};

const BlogItem = ({ id, text, image, meta, like, likes }) => (
  <div style={style}>
    <MarginBlock margin="-20px -20px 10px">
      <Image {...image} />
    </MarginBlock>
    <h2>{text}</h2>
    <hr />
    <MetaBlock {...meta} />
    <Like like={like} likes={likes} id={id} />
  </div>
);

BlogItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string,
  image: PropTypes.shape(Image.proptypes),
  meta: PropTypes.shape(MetaBlock.proptypes).isRequired,
  like: PropTypes.func.isRequired,
  likes: PropTypes.number,
};

BlogItem.defaultProps = {
  text: 'Text is not provided',
  image: { src: 'images/empty_photo.jpg', alt: 'Empty photo' },
  likes: 0,
};


export default BlogItem;
