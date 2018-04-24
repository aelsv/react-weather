/* @Recompose */
import compose from 'recompose/compose';
import withState from 'recompose/withState';

export default compose(withState('_value', '_setValue', props => props.value));
