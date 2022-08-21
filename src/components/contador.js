import React from "react";
import "../styles/contador.css";

function Contador({ numClicks }){

    return(
        <div className="contador">
            {numClicks}
        </div>
    );
}

export default Contador;