import React from 'react';
import PropTypes from 'prop-types';
import WithReviewData from 'components/fetchers/WithReviewData';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MoviePoster from 'components/widgets/MoviePoster';
import PageHeader from '../ui/PageHeader';

const ReviewShow = props => (
  <Grid fluid>
    <Row>
      <Col xs={12} sm={8} md={9} lg={10}>
        <PageHeader text={props.review.title} />
        <div dangerouslySetInnerHTML={{ __html: props.review.text }} />
      </Col>
      <Col xs={12} sm={4} md={3} lg={2}>
        <MoviePoster {...props.review.movie} />
      </Col>
    </Row>
  </Grid>
);

ReviewShow.propTypes = {
  id: PropTypes.string.isRequired,
  review: PropTypes.object.isRequired,
};

export default WithReviewData(ReviewShow);
