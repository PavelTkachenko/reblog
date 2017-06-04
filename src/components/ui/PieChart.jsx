class PieChart extends React.Component {
  componentDidMount() {
    this.chart = c3.generate({
      bindto: this.chart,
      data: {
        columns: this.props.columns ,
        type : 'pie',
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.chart.load({ columns: nextProps.columns })
    }
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  render() {
    return (
      <div ref={(c) => { this.chart = c; }} />
    );
  }
}

export default PieChart;
