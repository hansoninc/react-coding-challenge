import React from "react";
import Card from "./Card";
import PropTypes from 'prop-types';

/**
 * Loop through incoming items and output a card
 * component for each one.
 * @param items
 * @param button
 * @constructor
 */
const List = ({ items, button }) => {
  return (
    <div className="list">
      {items.map((item) => (
        <Card
          key={item.id}
          item={item}
          button={button}
        />
      ))}
    </div>
  )
}

/**
 * PropTypes is a npm package for setting the type of prop its
 * expecting to receive for the component/ as of React version 15.5.0
 * React.PropTypes has moved to package prop-types
 */
List.propTypes = {
  items: PropTypes.array,
  button: PropTypes.object,
};

export default List;
