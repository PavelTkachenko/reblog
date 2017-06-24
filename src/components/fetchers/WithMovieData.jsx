import React from 'react';
import axios from 'axios';
import { API_PATH } from 'constants/conf';
import Loading from 'components/ui/Loading';

const WithMovieData = (BaseComponent) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isLoading: true };
    }

    componentDidMount() {
      axios.get(`${API_PATH}/movies/${this.props.id}`)
        .then((res) => {
          const data = res.data;
          this.setState({ isLoading: false, movie: data.movie });
        });
    }

    render() {
      return this.state.isLoading
      ? <Loading />
      : <BaseComponent {...this.props} movie={this.state.movie} />;
    }
  };

export default WithMovieData;
