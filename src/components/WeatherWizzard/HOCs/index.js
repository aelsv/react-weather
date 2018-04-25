/* @Recompose */
import { pure, compose, setDisplayName, defaultProps } from 'recompose';

import reduxConnectHOC from './reduxConnect';
import stateHOC from './state';
import handlersHOC from './handlers';
import { propsHOC, classNamesHOC } from './withPropsOnChange';
import lifecycleHOC from './lifecycle';

/* @DisplayName */
const displayNameHOC = setDisplayName('WeatherWizzard');

const defaultPropsHOC = defaultProps({
  city: '',
  contry: '',
  briefDescription: '',
  queries: [],
});

export default compose(
  reduxConnectHOC,
  displayNameHOC,
  defaultPropsHOC,
  stateHOC,
  propsHOC,
  handlersHOC,
  classNamesHOC,
  lifecycleHOC,
  pure
);
