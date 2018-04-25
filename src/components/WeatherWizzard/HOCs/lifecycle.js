/* @Recompose */
import lifecycle from 'recompose/lifecycle';

export default lifecycle({
  componentWillMount() {
    const { fetchWeather } = this.props;

    fetchWeather('kiev');
  },

  componentWillReceiveProps(nextProps) {
    if (this.props.error !== nextProps.error) {
      nextProps._setError(nextProps.error);
    }
  },
});
