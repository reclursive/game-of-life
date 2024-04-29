import React, { useRef, useState } from 'react';


export default function Pause(){
    const stopMotion = ()=>{
        // data.map(element => ({ ...element, checked: false }));
        console.log("PAUSE")
    }
    return(<button onClick={stopMotion}className="pause">||</button>)
}
