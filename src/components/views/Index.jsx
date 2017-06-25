import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ReviewList from 'components/ui/ReviewList';


const Index = props => (
  <Grid fluid>
    <Row>
      <Col xs={12} sm={12} md={12} lg={12}>
        <ReviewList reviews={props.reviews} />
      </Col>
    </Row>
  </Grid>
);

Index.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default Index;
