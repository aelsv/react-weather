/* @Recompose */
import withHandlers from 'recompose/withHandlers';

/* @Lodash */
import isFunction from 'lodash/isFunction';

const keyCodes = {
  27: 'esc',
};

export default withHandlers({
  _onChange: ({ onChange, _setValue }) => e => {
    e.preventDefault();
    _setValue(e.target.value);

    /* if onChange thrown from outside => return value */
    if (isFunction(onChange)) {
      onChange(e.target.value);
    }
  },

  _onKeyDown: ({ onKeyDown }) => e => {
    /* if onKeyDown thrown from outside => return value */
    if (isFunction(onKeyDown)) {
      onKeyDown(e.target.value);
    }

    const key = keyCodes[e.keyCode];

    if (!key) return;

    if (key === 'esc') e.target.blur();
  },

  _onReset: ({ id, _value, _setValue }) => () => {
    if (_value.length !== 0) {
      _setValue('');
      document.getElementById(id).focus();
    }
  },
});
