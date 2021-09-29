import React, { useState } from "react";

function FilterInput(props) {
  // Only render the filtering if the Panel List has filtering active
  if (!props.filtering) {
    return null;
  }

  const [inputValue, setInputValue] = useState("");
  // Function to run when a change occurs in the input field
  function handleChange(e) {
    // Setting the value in the input field
    setInputValue(e.target.value);

    // Call back function to run at the root while passing the value of the input field along
    props.inputSet(e.target.value);
  }

  // Function to run when reset button is clicked
  function handleReset() {
    // Callback function to run at the root
    props.filterReset();

    // Setting the input value to a blank string
    setInputValue("");
  }

  return (
    <div className="panel__filtering-container">
      <div className="panel__filtering" id="js-filterInput">
        <input type="text" value={inputValue} placeholder="Filter Devices" onChange={handleChange} ></input>
        <button onClick={handleReset}>Reset Filter</button>
      </div>
    </div>
  )
}

export default FilterInput;