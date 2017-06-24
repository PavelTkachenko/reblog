import React from 'react';
import axios from 'axios';
import { API_PATH } from 'constants/conf';
import Loading from 'components/ui/Loading';

const WithReviewData = (BaseComponent) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isLoading: true };
    }

    componentDidMount() {
      axios.get(`${API_PATH}/reviews/${this.props.id}`)
        .then((res) => {
          const data = res.data;
          this.setState({ isLoading: false, review: data.review });
        });
    }

    render() {
      return this.state.isLoading
      ? <Loading />
      : <BaseComponent {...this.props} review={this.state.review} />;
    }
  };

export default WithReviewData;
