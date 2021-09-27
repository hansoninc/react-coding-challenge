import React from "react";
import Card from "./Card";

function List(props){

    console.log("here");

    return (
        <div className="list">
            {props.data.sort((a, b) => a.model.localeCompare(b.model)).sort((a, b) => a.manufacturer.localeCompare(b.manufacturer)).map((item, index) => (                
                <Card 
                    item={item} 
                    buttonAction={props.buttonAction} 
                    buttonText={props.buttonText}
                    index={index} 
                />
            ))}            
        </div>
    )
}

export default List;