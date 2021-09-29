import React from "react";
// Components
import Card from './Card';

function List(props) {
  if (props.data.length == 0) {
    return (
      <div className="panel__list">
        <div className="list__card">
          <p className="list__disclaimer">No Devices</p>
        </div>
      </div>
    )
  }

  return (
    <div className="panel__list">
      {props.data.map((device, index) => (
        <Card
          key={index}
          id={device.id}
          uid={device.uid}
          build_number={device.build_number}
          manufacturer={device.manufacturer}
          model={device.model}
          platform={device.platform}
          serial_number={device.serial_number}
          version={device.version}
          buttonText={props.buttonText}
          onClicked={props.onClicked}
        />
      ))}

    </div>
  )
}

export default List;