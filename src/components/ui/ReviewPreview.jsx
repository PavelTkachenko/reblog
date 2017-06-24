import React from 'react';
import Link from './Link';
import Image from './Image';
import { IMAGE_STORE_PATH } from 'constants/conf';

const ReviewPreview = ({ id, title, preview, image }) => (
  <div style={{ overflow: 'hidden', marginBottom: '20px' }}>
    <Image
      style={
      {
        float: 'left',
        marginRight: '20px',
        height: '100px',
        width: '100px',
      }
      }
      src={`${IMAGE_STORE_PATH}${image}`}
    />
    <h4><Link to={`/reviews/${id}`}>{title}</Link></h4>
    <p>{preview}</p>
  </div>
);

export default ReviewPreview;
