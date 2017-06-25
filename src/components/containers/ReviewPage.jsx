import React from 'react';
import axios from 'axios';
import { API_PATH } from 'constants/conf';
import ReviewShow from 'components/views/ReviewShow';
import WithLoading from 'components/hoc/WithLoading';

class ReviewPage extends React.Component {
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
    return <ReviewShow {...this.props} review={this.state.review} />;
  }
}

export default WithLoading(ReviewPage);
