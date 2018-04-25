import classNames from 'classnames/bind';
import withPropsOnChange from 'recompose/withPropsOnChange';

import css from '../WeatherWizzard.scss';

/* bind classNames bcs of CSS-MODULES */
const cx = classNames.bind(css);

export const propsHOC = withPropsOnChange(['queries', 'country'], ({ queries, country }) => ({
  _cities: [...new Set(queries.map(({ name }) => name.toLowerCase()))],

  _flag: !!country
    ? country.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397))
    : '',
}));

export const classNamesHOC = withPropsOnChange(['className'], ({ className }) => ({
  _className: cx({
    wrapper: true,
    [className]: !!className,
  }),
}));
