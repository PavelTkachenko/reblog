import React from 'react';

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.count };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Like! ({this.state.count})
      </button>
    );
  }

  handleClick(e) {
    this.setState({ count: this.state.count + 1 });
  }
}

Like.propTypes = {
  count: PropTypes.number
};

Like.defaultProps = {
  count: 0
};

export default Like;
