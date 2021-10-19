import React from "react";
import Card from "./Card";

export default function List({ data, buttonText, onStateChange }) {
  // function to move items between lists
  const handleDeviceListClick = (id) => {
    // get the index of the item that was clicked and pass it to our state handler
    // match by uid
    let itemToMoveIndex = data.map((el) => el.uid).indexOf(id);

    onStateChange(itemToMoveIndex);
  };

  return data.length > 0 ? (
    <ul>
      {data.map((item, index) => (
        <li key={index}>
          <Card
            item={item}
            buttonText={buttonText}
            clickHandler={handleDeviceListClick}
          />
        </li>
      ))}
    </ul>
  ) : (
    <div>The list is empty.</div>
  );
}
