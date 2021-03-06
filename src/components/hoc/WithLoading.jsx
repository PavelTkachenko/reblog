import React from 'react';
import Loading from 'components/ui/Loading';

const WithLoading = (BaseComponent) =>
  class extends BaseComponent {
    render() {
      return this.state.data
      ? super.render()
      : <Loading />;
    }
  };


export default WithLoading;
