import React from "react";
import "./Portraits.css"

function Portraits(props) {
    return (
        <div className="card" id={props.id} onClick={() => props.swapPortraits(props.id)}>
            <img className="sizeFix" alt={props.name} src={props.image} />
        </div>
    );
}

export default Portraits;