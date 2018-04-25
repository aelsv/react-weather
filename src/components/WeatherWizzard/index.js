import React from 'react';
import { arrayOf, func, string, shape, number } from 'prop-types';

/* @Recompose */
import compose from 'recompose/compose';

/* @Components */
import Input from '../Input';
import Button from '../Button';

import css from './WeatherWizzard.scss';

/* @HOC */
import HOCs from './HOCs';

const propTypes = {
  city: string,
  error: string,
  country: string,
  className: string,
  temperature: shape({
    current: number,
    min: number,
    max: number,
  }),
  queries: arrayOf(
    shape({
      id: number,
      name: string,
    })
  ),
  briefDescription: string,
  /* PrivateProps */
  _flag: string,
  _errorMsg: string,
  _value: string,
  _title: string,
  _country: string,
  _className: string,
  _cities: arrayOf(string),
  _onClick: func,
  _onChange: func,
  _onSubmit: func,
};

export const weatherWizzardHOC = compose(HOCs);

export const weatherWizzard = ({
  city,
  temperature,
  briefDescription,
  _flag,
  _errorMsg,
  _value,
  _cities,
  _className,
  _onClick,
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
          error={_errorMsg}
          onChange={_onChange}
        />
        <Button
          size="md"
          className={css.container__button}
          disabled={!!_errorMsg}
          onClick={_onSubmit}
        >
          Get weather!
        </Button>
      </form>
    </div>
    <div className={css.section}>
      <span className={css.section__heading}>{`${briefDescription} in ${city} ${_flag}`}</span>
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
