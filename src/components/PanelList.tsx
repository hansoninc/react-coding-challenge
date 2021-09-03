import React from "react";
import List from "./List";
import FilterInput from "./FilterInput";

function PanelList(){
    return (
        <div className="panelList">
            <h2>Devices</h2>
            <FilterInput />
            <List />
        </div>
    )
}

export default PanelList;