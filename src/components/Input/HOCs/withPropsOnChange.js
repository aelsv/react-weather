/* @Recompose */
import withPropsOnChange from 'recompose/withPropsOnChange';

import classNames from 'classnames/bind';
import css from '../Input.scss';

/* bind classNames bcs of CSS-MODULES */
const cx = classNames.bind(css);

export default withPropsOnChange(
  ['className', 'fieldClassName', 'error'],
  ({ className, fieldClassName, error }) => ({
    _className: cx({
      wrapper: true,
      [className]: !!className,
    }),
    _fieldClassName: cx({
      field: true,
      field_invalid: error.length > 0,
      [fieldClassName]: !!fieldClassName,
    }),
  })
);
