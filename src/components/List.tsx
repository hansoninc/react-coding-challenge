import React from "react";
import Card from "./Card";

function List(props){

    console.log("here");

    return (
        <div className="list">
            
            
            {props.data.filter(
                    device => device.model.includes(props.filterString)
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