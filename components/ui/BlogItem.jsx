import React from 'react';
import Image from './Image.jsx'
import TextBox from './TextBox.jsx'

const BlogItem = ({image, text}) => (
  <div>
    <Image {...image} />
    <br/>
    <TextBox>{text}</TextBox>
  </div>
);

export default BlogItem;
