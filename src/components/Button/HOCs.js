/* @Recompose */
// import pure from 'recompose/pure';
import compose from 'recompose/compose';
import defaultProps from 'recompose/defaultProps';
import setDisplayName from 'recompose/setDisplayName';
import withPropsOnChange from 'recompose/withPropsOnChange';

import classNames from 'classnames/bind';
import css from './Button.scss';

/* bind classNames bcs of CSS-MODULES */
const cx = classNames.bind(css);

export default compose(
  setDisplayName('Button'),

  defaultProps({
    exists: true,
    disabled: false,
    targetBlank: false,
    size: 'xs',
    type: 'default',
    accent: 'bostonBlue',
    component: 'button',
  }),

  withPropsOnChange(
    ['className', 'type', 'size', 'accent'],
    ({ className, type, size, accent }) => ({
      className: cx({
        button: true,
        [`button_${size}`]: !!size,
        [`button_${type}`]: !!type,
        [`button_${type}_${accent}`]: !!type && !!accent,
        [`button_${size}_${type}`]: !!size && !!type,
        [className]: !!className,
      }),
    })
  )
  // pure
);
