import React from "react";
import List from "./List";
import FilterInput from "./FilterInput";


//const [filterString, setFilterString] = useState("");

// useEffect(()=>{    
//     setFilterString("");
// });

function onFilterChange(text){
    console.log(text);
    console.log("filter");

    // setFilterString(text);
}

function PanelList(props){ 
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
                filterString={props.filterString}
            />
        </div>
    )
}

export default PanelList;