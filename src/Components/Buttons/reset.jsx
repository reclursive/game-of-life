import React, { useRef, useState } from 'react';

export default function Reset(){
    // const data = useRef([])
    const resetBoard = ()=>{
        // data.map(element => ({ ...element, checked: false }));
        console.log("helloooo")
    }
    return(<button onClick={resetBoard}className="reset">Reset</button>)
}
