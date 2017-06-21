import React from 'react';
import PropTypes from 'prop-types';
import { IMAGE_STORE_PATH } from '../../constants/conf';
import Image from '../ui/Image';
import DataBlock from '../ui/DataBlock';
import Link from '../ui/Link';

const MoviePoster = ({ id, poster, title, year, origin }) => (
  <div>
    <Image style={{ width: '100%' }} src={`${IMAGE_STORE_PATH}${poster}`} />
    <DataBlock title="Название">
      <Link to={`/movies/${id}`}>{title}</Link>
    </DataBlock>
    <DataBlock title="Страна">{origin}</DataBlock>
    <DataBlock title="Релиз">{year}</DataBlock>
  </div>
);

MoviePoster.propTypes = {
  id: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  origin: PropTypes.string.isRequired,
};

export default MoviePoster;
