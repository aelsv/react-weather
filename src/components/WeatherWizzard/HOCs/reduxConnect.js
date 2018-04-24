import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchWeather } from '../../../reducers/weather';

export default connect(
  ({ weather }) => ({ ...weather }),
  dispatch => bindActionCreators({ fetchWeather }, dispatch)
);
