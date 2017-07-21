import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MoviePoster from 'components/widgets/MoviePoster';
import PageHeader from 'components/ui/PageHeader';
import SectionHeader from 'components/ui/SectionHeader';
import ReviewList from 'components/ui/ReviewList';


const MovieShow = props => (
  <Grid fluid>
    <Row>
      <Col xs={12} sm={4} md={3} lg={2}>
        <MoviePoster {...props.movie} />
      </Col>
      <Col xs={12} sm={8} md={9} lg={10}>
        <PageHeader text={props.movie.title} />
        <p>{props.movie.description}</p>
        <SectionHeader text="Рецензии" />
        <ReviewList reviews={props.movie.reviews} />
      </Col>
    </Row>
  </Grid>
);

MovieShow.propTypes = {
  id: PropTypes.string.isRequired,
  movie: PropTypes.object.isRequired,
};

export default MovieShow;
