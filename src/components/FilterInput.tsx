import React from "react";

function FilterInput(props){
    return (
        <div className="filter-input">
            <h3>Filter Input</h3>
            <form>
                <label></label>
                <input type="text" onChange={(event) => props.onFilterChange(event.target.value)}/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default FilterInput;