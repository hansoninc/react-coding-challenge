import React, { useState} from "react";
import List from "./List";
import FilterInput from "./FilterInput";




function PanelList(props){ 

    const [filterString, setFilterString] = useState("");



    function onFilterChange(text){
        console.log(text);
        console.log("filter");

        setFilterString(text);
    }
    return (
        <div className="panelList">
            <h2>{props.name}</h2>
            {props.isFiltered &&
                <FilterInput 
                    onFilterChange={onFilterChange}
                />
            }
            
            <List 
                data={props.data} 
                buttonAction={props.buttonAction} 
                buttonText={props.buttonText}
                filterString={filterString}
            />
        </div>
    )
}

export default PanelList;