import compose from 'recompose/compose';
import withState from 'recompose/withState';

export default compose(
  withState('_value', '_setValue', ''),
  // withState('_error', '_setError', {}),
  withState('_isInvalid', '_setInvalid', props => props.isInvalid)
);
