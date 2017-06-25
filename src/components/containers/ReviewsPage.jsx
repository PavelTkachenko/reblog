import React from 'react';
import axios from 'axios';
import { API_PATH } from 'constants/conf';
import Index from 'components/views/Index';
import WithLoading from 'components/hoc/WithLoading';

class ReviewsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    axios.get(`${API_PATH}/reviews`)
      .then((res) => {
        const data = res.data;
        this.setState({ isLoading: false, reviews: data.reviews });
      });
  }

  render() {
    return <Index {...this.props} reviews={this.state.reviews} />;
  }
}

export default WithLoading(ReviewsPage);
