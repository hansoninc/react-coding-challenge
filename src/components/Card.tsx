import React from "react";
import { Grid } from "@material-ui/core";
import Button from "./Button"
import PropTypes from "prop-types";


/**
 * Output the contents of our card to include the item information and button info
 * @param item
 * @param button
 * @constructor
 */
const Card = ({ item, button }) => {
  return (
    <div className="card p-3">
      <Grid container spacing={0}>
        <Grid xs={8}>
          <div className="card__information">
            <div>{item.manufacturer} {item.model}</div>
            <div>{item.platform}</div>
            <div>{item.serial_number}</div>
          </div>
        </Grid>
        <Grid xs={4}>
          <div className="d-flex justify-content-end">
            <Button
              className={button.classes}
              buttonText={button.text}
              item={item}
              action={button.action} />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

/**
 * PropTypes is a npm package for setting the type of prop its
 * expecting to receive for the component/ as of React version 15.5.0
 * React.PropTypes has moved to package prop-types
 */
Card.propTypes = {
  item: PropTypes.shape({
    manufacturer: PropTypes.string,
    model: PropTypes.string,
    platform: PropTypes.string,
    serial_number: PropTypes.string
  }),
  button: PropTypes.shape({
    text: PropTypes.string,
    action: PropTypes.func,
    classes: PropTypes.string
  })
};

export default Card;
