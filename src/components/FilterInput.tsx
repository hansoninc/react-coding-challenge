import React from "react";

export default function FilterInput(props) {
  function handleFiltering(e) {
    console.log("value is = " + e.target.value);
    props.onFilteringStateChange(e.target.value.toLowerCase());
  }

  return (
    <div>
      <input type="text" onChange={handleFiltering} />
    </div>
  );
}
