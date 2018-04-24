import React from 'react';
import { any, bool, func, oneOf, string, element, oneOfType } from 'prop-types';

/* @Recompose */
import compose from 'recompose/compose';

/* @HOC */
import HOCs from './HOCs';

const propTypes = {
  exists: bool,
  disabled: bool,
  targetBlank: bool,
  url: string,
  className: string,
  children: any,
  size: oneOf(['xs', 'md']),
  accent: oneOf(['bostonBlue', 'atomic']),
  type: oneOf(['none', 'default', 'outline', 'dotted']),
  component: oneOfType([element, func, string]),
  onClick: func,
  /* PrivateProps */
  _className: string,
};

export const buttonHOC = compose(HOCs);

export const button = ({
  exists,
  url,
  disabled,
  targetBlank,
  children,
  component,
  onClick,
  ...props
}) => {
  const calcProps = {
    component,
    type: null,
    disabled,
    onClick,

    ...(component === 'button' ? { type: 'button' } : {}),

    ...(component === 'submit'
      ? {
          component: 'button',
          type: 'submit',
          onClick: undefined,
        }
      : {}),

    ...(component === 'a'
      ? {
          href: url,
          target: targetBlank ? '_blank' : null,
          disabled: null,
          onClick: disabled ? ev => ev.preventDefault() : onClick,
        }
      : {}),

    // ...(component === Link ? {
    //   to: url,
    //   target: targetBlank ? '_blank' : null,
    //   type: 'Link',
    //   disabled: null,
    //   onClick: disabled ? ev => ev.preventDefault() : onClick,
    // } : {}),
  };

  const calcComponent = calcProps.component;
  delete calcProps.component;

  return (
    <Base exists={exists} component={calcComponent} {...props} {...calcProps}>
      {children}
    </Base>
  );
};

button.propTypes = propTypes;

export default buttonHOC(button);
