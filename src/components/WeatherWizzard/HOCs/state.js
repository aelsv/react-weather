import compose from 'recompose/compose';
import withState from 'recompose/withState';

export default compose(
  withState('_value', '_setValue', ''),
  withState('_errorMsg', '_setError', props => props.error)
);
