import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { API_PATH } from '../../constants/conf';
import MoviePoster from '../widgets/MoviePoster';
import PageHeader from '../ui/PageHeader';

class ReviewPage extends React.Component {

  static renderLoading() {
    return <div>Загрузка...</div>;
  }

  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    axios.get(`${API_PATH}/reviews/${this.props.id}`)
      .then((res) => {
        const data = res.data;
        this.setState({ review: data.review, isLoading: false });
      });
  }

  renderData() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} sm={8} md={9} lg={10}>
            <PageHeader text={this.state.review.title} />
            <div dangerouslySetInnerHTML={{ __html: this.state.review.text }} />
          </Col>
          <Col xs={12} sm={4} md={3} lg={2}>
            <MoviePoster {...this.state.review.movie} />
          </Col>
        </Row>
      </Grid>
    );
  }

  render() {
    return this.state.isLoading
      ? ReviewPage.renderLoading()
      : this.renderData();
  }
}

ReviewPage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ReviewPage;
