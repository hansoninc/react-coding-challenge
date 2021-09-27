import React from "react";

function FilterInput(){
    return (
        <div className="filter-input">
            <h3>Filter Input</h3>
            <form>
                <label></label>
                <input type="text" value="placeholder" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default FilterInput;