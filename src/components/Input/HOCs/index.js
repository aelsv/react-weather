/* @Recompose */
import { pure, compose, setDisplayName, defaultProps } from 'recompose';

import stateHOC from './state';
import handlersHOC from './handlers';
import classNamesHOC from './withPropsOnChange';
import lifecycleHOC from './lifecycle';

const displayNameHOC = setDisplayName('Input');

const defaultPropsHOC = defaultProps({
  exists: true,
  id: Math.floor(Math.random() * 100) + 1,
  type: 'text',
  value: '',
  placeholder: '',
  error: '',
});

export default compose(
  displayNameHOC,
  defaultPropsHOC,
  stateHOC,
  handlersHOC,
  classNamesHOC,
  lifecycleHOC,
  pure
);
