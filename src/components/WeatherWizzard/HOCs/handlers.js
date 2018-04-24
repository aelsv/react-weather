import withHandlers from 'recompose/withHandlers';

export default withHandlers({
  _onChange: ({ _setValue }) => value => {
    _setValue(value);
  },

  _onSubmit: ({ fetchWeather, city, _value }) => e => {
    e.preventDefault();
    const isIdenticalQuery = city.toLowerCase() === _value.toLowerCase();

    if (_value.length === 0) {
      console.log('value pustoe');
    } else if (!isIdenticalQuery) {
      fetchWeather(_value);
    }
  },

  _onClick: ({ city, fetchWeather, _setValue }) => value => () => {
    const isIdenticalQuery = city.toLowerCase() === value.toLowerCase();

    if (!isIdenticalQuery) {
      fetchWeather(value);
      _setValue('');
    }
  },
});
