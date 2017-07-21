import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

const DataBlock = ({ title, children }) => (
  <Row>
    <Col xs={12} sm={12} md={12} lg={4}>
      <small>{title}</small>
    </Col>
    <Col xs={12} sm={12} md={12} lg={8}>
      <p><b>{children}</b></p>
    </Col>
  </Row>
);

export default DataBlock;
