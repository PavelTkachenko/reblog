import React from 'react';
import axios from 'axios';
import { API_PATH } from 'constants/conf';
import Loading from 'components/ui/Loading';

const WithReviewsData = (BaseComponent) =>
  class extends React.Component {
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
      return this.state.isLoading
      ? <Loading />
      : <BaseComponent {...this.props} reviews={this.state.reviews} />;
    }
  };

export default WithReviewsData;
