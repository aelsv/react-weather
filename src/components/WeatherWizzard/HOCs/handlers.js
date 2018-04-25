import withHandlers from 'recompose/withHandlers';

export default withHandlers({
  _onChange: ({ _setValue, _setError }) => value => {
    _setValue(value);

    if (value.length > 0) {
      _setError('');
    }
  },

  _onSubmit: ({ fetchWeather, city, _value, _setError }) => e => {
    e.preventDefault();
    const isIdenticalQuery = city.toLowerCase() === _value.toLowerCase();

    if (_value.length === 0) {
      _setError('Please enter city for result');
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
