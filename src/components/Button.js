import React from "react";

const Button = ({  show, handleShowClick }) => { 

   

    return(
        <button onClick={handleShowClick}>{show ? 'hide' : 'show'}</button>
    )
}


export default Button