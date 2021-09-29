import React from "react";

function Button(props) {
  function handleEvent(e) {
    var buttonId = e.target.getAttribute('data-id');
    props.onClicked(buttonId);
  }

  return (
    <button onClick={handleEvent} data-id={props.id} data-index={props.index}>{props.buttonText}</button>
  )
}

export default Button;