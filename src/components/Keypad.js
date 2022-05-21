// Code Keypad Component Here

import react from "react";

function handlePass(){
    console.log('Entering password...')
}

function Keypad(){
    return(
     <input type="password" onChange={handlePass}/>
    )
}

export default Keypad