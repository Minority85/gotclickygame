import React from "react";
// import "./Hbtn.css"

function Hbtn(props) {
    return (
        <div className="btn btn-danger" id="hard" type="button" onClick={() => props.changeHard(3)}>
            Hard
        </div>
    )
}

export default Hbtn;