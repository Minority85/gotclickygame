import React from "react";
// import "./Ebtn.css"

function Ebtn(props) {
    return (
        <div className="btn btn-success" id="easy" type="button" onClick={() => props.changeEasy(1)}>
            Easy
        </div>
    )
}

export default Ebtn;