import React from "react";
import PropTypes from "prop-types";

/**
 * onKeyUp of the input pass in the event so we can grab its value
 * in the parent function located in the dashbaord index page
 * @param filterDevices
 * @constructor
 */
const FilterInput = ({ filterDevices }) => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        onKeyUp={(e) => filterDevices(e)}
        placeholder="Search" />
    </div>
  )
}

/**
 * PropTypes is a npm package for setting the type of prop its
 * expecting to receive for the component/ as of React version 15.5.0
 * React.PropTypes has moved to package prop-types
 */
FilterInput.propTypes = {
  filterDevices: PropTypes.func
};


export default FilterInput;
