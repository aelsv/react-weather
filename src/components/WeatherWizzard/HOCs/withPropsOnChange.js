import classNames from 'classnames/bind';
import withPropsOnChange from 'recompose/withPropsOnChange';

import css from '../WeatherWizzard.scss';

/* bind classNames bcs of CSS-MODULES */
const cx = classNames.bind(css);

export const propsHOC = withPropsOnChange(
  ['country', 'city', 'queries', 'briefDescription'],
  ({ country, city, queries, briefDescription }) => {
    const _flag = !!country
      ? country
          .toUpperCase()
          .replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397))
      : '';

    const _cities = [...new Set(queries.map(({ name }) => name.toLowerCase()))];

    const _title = !!briefDescription && !!city ? `${briefDescription} in ${city} ${_flag}` : '';

    return { _cities, _title };
  }
);

export const classNamesHOC = withPropsOnChange(
  ['className', '_isInvalid'],
  ({ className, _isInvalid }) => ({
    _className: cx({
      wrapper: true,
      [className]: !!className,
    }),

    _inputClassName: cx({
      input: true,
      input_invalid: _isInvalid,
    }),
  })
);
