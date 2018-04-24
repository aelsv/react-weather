import React from 'react';
import { bool, func, string } from 'prop-types';

/* @Recompose */
import compose from 'recompose/compose';

/* @Components */
import Input from '../Input';
import Button from '../Button';

import css from './WeatherWizzard.scss';

/* @HOC */
import HOCs from './HOCs';

const propTypes = {
  className: string,
  /* PrivateProps */
  _isInvalid: bool,
  _country: string,
  _value: string,
  _className: string,
  _inputClassName: string,
  _onSubmit: func,
  _onChange: func,
};

export const weatherWizzardHOC = compose(HOCs);

export const weatherWizzard = ({
  /* eslint-disable */
  city,
  _value,
  _onClick,
  _cities,
  _title,
  temperature,
  // _history,
  /* eslint-enable */

  _className,
  _inputClassName,
  _onSubmit,
  _onChange,
}) => (
  <div className={_className}>
    <div className={css.container}>
      <span className={css.container__title}>Check weather in your city!</span>
      <form className={css.container__form} onSubmit={_onSubmit}>
        <Input
          className={css.input}
          value={_value}
          placeholder="City..."
          fieldClassName={_inputClassName}
          onChange={_onChange}
        />
        <Button size="md" className={css.container__button} onClick={_onSubmit}>
          Get weather!
        </Button>
      </form>
    </div>
    <div className={css.section}>
      <span className={css.section__heading}>{_title}</span>
      <div className={css.section__content}>
        <Base exists={!!temperature} className={css.section__container}>
          <span className={css.section__title}>🌡&nbsp;Temperature:</span>
          <span className={css.section__cell}>
            {`It's ${Math.floor(temperature.current)}`}
            &deg;&nbsp;
            {`The high will be ${Math.floor(temperature.max)}`}&deg;
          </span>
        </Base>
      </div>
      <Base exists={_cities.length > 0} className={css.section__footer}>
        <span className={css.section__heading}>Last requests:</span>
        <ul className={css.history__list}>
          {_cities.slice(0, 10).map((item, iIndex) => (
            <li key={iIndex} className={css.history__item}>
              <span className={css.history__caption}>{item}</span>
              <Button
                size="md"
                disabled={city.toLowerCase() === item.toLowerCase()}
                className={css.history__btn}
                onClick={_onClick(item)}
              >
                Check!
              </Button>
            </li>
          ))}
        </ul>
      </Base>
    </div>
  </div>
);

weatherWizzard.propTypes = propTypes;

export default weatherWizzardHOC(weatherWizzard);
