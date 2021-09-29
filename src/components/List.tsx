import React from "react";
import Card from "./Card";

function List(props){

    console.log("here");

    function filterList(device){
        const filterStringLower = props.filterString.toLowerCase();
        const modelMatches = device.model.toLowerCase().includes(filterStringLower);
        const manufacturerMatches = device.manufacturer.toLowerCase().includes(filterStringLower);
        const platformMatches = device.platform.toLowerCase().includes(filterStringLower);

        return modelMatches || manufacturerMatches || platformMatches;
    }

    return (
        <div className="list">
            
            
            {props.data.filter(filterList                    
                ).sort((a, b) => a.model.localeCompare(b.model)
                ).sort((a, b) => a.manufacturer.localeCompare(b.manufacturer)
                ).map((filteredItem) => (
                <Card 
                    item={filteredItem} 
                    buttonAction={props.buttonAction} 
                    buttonText={props.buttonText}
                />
            ))}
        </div>
    )
}

export default List;