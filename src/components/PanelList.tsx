import React from "react";
import List from "./List";
import FilterInput from "./FilterInput";

function PanelList(props){ 
    return (
        <div className="panelList">
            <h2>{props.name}</h2>
            {props.filterable &&
                <FilterInput />
            }
            
            <List 
                data={props.data} 
                buttonAction={props.buttonAction} 
                buttonText={props.buttonText}
            />
        </div>
    )
}

export default PanelList;