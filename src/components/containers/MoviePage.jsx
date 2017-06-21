import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { API_PATH } from '../../constants/conf';
import MoviePoster from '../widgets/MoviePoster';
import PageHeader from '../ui/PageHeader';
import SectionHeader from '../ui/SectionHeader';
import ReviewList from '../ui/ReviewList';

class MoviePage extends React.Component {

  static renderLoading() {
    return <div>Загрузка...</div>;
  }

  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    axios.get(`${API_PATH}/movies/${this.props.id}`)
      .then((res) => {
        const data = res.data;
        this.setState({ movie: data.movie, isLoading: false });
      });
  }

  renderData() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} sm={4} md={3} lg={2}>
            <MoviePoster {...this.state.movie} />
          </Col>
          <Col xs={12} sm={8} md={9} lg={10}>
            <PageHeader text={this.state.movie.title} />
            <p>{this.state.movie.description}</p>
            <SectionHeader text="Рецензии" />
            <ReviewList reviews={this.state.movie.reviews} />
          </Col>
        </Row>
      </Grid>
    );
  }

  render() {
    return this.state.isLoading
      ? MoviePage.renderLoading()
      : this.renderData();
  }
}

MoviePage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default MoviePage;
