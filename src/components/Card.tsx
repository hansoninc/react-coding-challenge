import React from "react";
import Button from './Button';

function Card(props) {

  return (
    <div className="list__card" id={props.id}>
      <div className="card__device">
        <p className="device__manufacturer"><i>{props.manufacturer}</i></p>
        <p className="device__model">{props.model}</p>
        <p className="device__platform">{props.platform}</p>
        <p className="device__serial-number"><strong>SN:</strong> {props.serial_number}</p>
      </div>
      <div className="card__button">
        <Button
          buttonText={props.buttonText}
          id={props.id}
          onClicked={props.onClicked}
        />
      </div>
    </div>
  )
}

export default Card;