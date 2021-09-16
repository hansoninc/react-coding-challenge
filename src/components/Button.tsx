import React from "react";
import PropTypes from 'prop-types';

/**
 * Return our button and set its action
 * @param className
 * @param buttonText
 * @param item
 * @param action
 * @constructor
 */
const Button = ({ className, buttonText, item, action }) => {
  return (
    <button
      className={className}
      onClick={() => action(item.id)}
    >
      {buttonText}
    </button>
  )
}

/**
 * If nothing is passed in for these prop types
 * the default value should be as below
 */
Button.defaultProps = {
  buttonText: "Button",
  className: "btn"
}

/**
 * PropTypes is a npm package for setting the type of prop its
 * expecting to receive for the component/ as of React version 15.5.0
 * React.PropTypes has moved to package prop-types
 */
Button.propTypes = {
  className: PropTypes.string,
  buttonText: PropTypes.string,
  item: PropTypes.object,
  action: PropTypes.func
}

export default Button;
