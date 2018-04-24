import lifecycle from 'recompose/lifecycle';

export default lifecycle({
  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      nextProps._setValue(nextProps.value);
    }
  },
});
