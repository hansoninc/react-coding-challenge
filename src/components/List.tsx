import React from "react";
import Card from "./Card";

function List(props){
    return (
        <div className="list">
            {props.data.map((item, index) => (                
                <Card item={item} buttonAction={props.buttonAction} index={index} />
            ))}            
        </div>
    )
}

export default List;