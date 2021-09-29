import React from "react";
// Components
import FilterInput from './FilterInput';
import List from './List';

function PanelList(props) {
  return (
    <div className="dashboard__panel-container">
      <div className="dashboard__panel">
        <div className="panel__header">
          <h2>{props.title}</h2>

          <FilterInput
            filtering={props.filtering}
            inputSet={props.inputSet}
            filterReset={props.filterReset}
          />
        </div>


        <List
          buttonText={props.buttonText}
          data={props.data}
          onClicked={props.onClicked}
        />
        
      </div>
    </div>
  )
}

export default PanelList;