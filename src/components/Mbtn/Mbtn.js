import React from "react";
// import "./Mbtn.css"

function Mbtn(props) {
    return (
        <div className="btn btn-warning ml-2 mr-2" id="medium" type="button" onClick={() => props.changeMedium(2)}>
            Medium
        </div>
    )
}

export default Mbtn;