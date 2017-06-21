import React from 'react';
import update from 'immutability-helper';
import axios from 'axios';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { API_PATH } from '../../constants/conf';
import ReviewList from '../ui/ReviewList';

class BlogPage extends React.Component {

  static renderLoading() {
    return <div>Загрузка...</div>;
  }

  constructor(props) {
    super(props);
    this.like = this.like.bind(this);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    axios.get(`${API_PATH}/reviews`)
      .then((res) => {
        const data = res.data;
        this.setState({ reviews: data.reviews, isLoading: false });
      });
  }

  like(itemId) {
    const idx = this.state.items.findIndex(elem => elem.id === itemId);
    const newState = update(this.state, {
      reviews: {
        [idx]: {
          likes: { $apply: x => x + 1 },
        },
      },
    });
    this.setState(newState);
  }

  renderData() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <ReviewList reviews={this.state.reviews} like={this.like} />
          </Col>
        </Row>
      </Grid>
    );
  }


  render() {
    return this.state.isLoading
      ? BlogPage.renderLoading()
      : this.renderData();
  }
}

export default BlogPage;
