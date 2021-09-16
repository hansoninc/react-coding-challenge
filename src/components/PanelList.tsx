import React from "react";

/**
 * Uses props.children to pull in children of the component
 * @param props
 * @constructor
 */
const PanelList = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default PanelList;
