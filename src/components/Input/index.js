import React from 'react';
import { bool, func, oneOf, number, string, oneOfType } from 'prop-types';

/* @Recompose */
import compose from 'recompose/compose';

/* @HOC */
import HOCs from './HOCs';

import css from './Input.scss';

const propTypes = {
  exists: bool,
  isInvalid: bool,
  isAutocomplete: bool,
  id: oneOfType([string, number]).isRequired,
  type: oneOf([
    'text',
    'search',
    'password',
    'email',
    'date',
    'color',
    'number',
    'tel',
    'url',
    'textarea',
  ]).isRequired,
  value: string,
  placeholder: string,
  className: string,
  fieldClassName: string,
  onChange: func,
  onKeyDown: func,
  /* PrivateProps */
  _value: string,
  _className: string,
  _fieldClassName: string,
  _onReset: func,
  _onChange: func,
  _onKeyDown: func,
};

export const inputHOC = compose(HOCs);

export const input = ({
  id,
  type,
  exists,
  isAutocomplete,
  placeholder,
  _value,
  _className,
  _fieldClassName,
  _onReset,
  _onChange,
  _onKeyDown,
}) => (
  <Base exists={exists} className={_className}>
    <div className={css.container}>
      <input
        id={id}
        type={type}
        value={_value}
        autoComplete={!isAutocomplete ? 'off' : 'on'}
        className={_fieldClassName}
        placeholder={placeholder}
        onChange={_onChange}
        onKeyDown={_onKeyDown}
      />
      <Base
        component="button"
        type="button"
        exists={_value.length > 0}
        className={css.btn}
        onClick={_onReset}
      />
    </div>
  </Base>
);

input.propTypes = propTypes;

export default inputHOC(input);
