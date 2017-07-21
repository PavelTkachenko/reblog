import React from 'react';
import axios from 'axios';
import { API_PATH } from 'constants/conf';
import MovieShow from 'components/views/MovieShow';
import WithLoading from 'components/hoc/WithLoading';

class MoviePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    axios.get(`${API_PATH}/movies/${this.props.id}`)
      .then((res) => {
        const data = res.data;
        this.setState({ data: data.movie });
      });
  }

  render() {
    return <MovieShow {...this.props} movie={this.state.data} />;
  }
}

export default WithLoading(MoviePage);
