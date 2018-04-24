import React from 'react';
// import { Switch, Route } from 'react-router';

// import {} from 'prop-types';

/* components */
import WeatherWizzard from '../../components/WeatherWizzard';

import css from './App.scss';

//  const propTypes = {};

export const App = (/* Props like: lang, userData e.t.c. */) => (
  <div className={css.wrapper}>
    <div className={css.content}>
      <WeatherWizzard />
      {/* <Switch></Switch> */}
    </div>
  </div>
);

// App.defaultProps = {};

// App.propTypes = propTypes;

export default App;
