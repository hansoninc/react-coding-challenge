import React from "react";
import List from "./List";
import FilterInput from "./FilterInput";

function PanelList(props){ 
    return (
        <div className="panelList">
            <h2>{props.name}</h2>
            <FilterInput />
            <List data={props.data} buttonAction={props.buttonAction}/>
        </div>
    )
}

export default PanelList;