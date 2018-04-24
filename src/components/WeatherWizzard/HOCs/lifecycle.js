/* @Recompose */
import lifecycle from 'recompose/lifecycle';

export default lifecycle({
  componentWillMount() {
    const { fetchWeather } = this.props;

    fetchWeather('kiev');
  },
});
