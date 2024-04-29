import React from 'react'
import './boardStyles.css'
import Reset from '../Buttons/reset.jsx'
import Pause from '../Buttons/pauseSet.jsx'
import wb from '../Assets/wb.svg'
// import bbtiny2 from '../Assets/bbtiny2.svg'

const Board = () => {

    return (
<div class="container1">
    <div class="container2" className="firstBoard" >
        <div class="row row-cols-6 wbrow">
            {/* onClick={invert} for all  */}
            <div class="col wbbcol">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="1,1" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                </label>
                </div>
            </div>
            <div class="col wbbcol">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="1,2" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                </label>
                </div>
            </div>
            <div class="col wbbcol">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="1,3" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                </label>
                </div>
            </div>
            <div class="col wbbcol">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="1,4" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                </label>
                </div>
            </div>
            <div class="col wbbcol">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="1,5" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                </label>
                </div>
            </div>
            <div class="col wbbcol">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="1,6" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                </label>
                </div>
            </div>
            </div>
        <div class="row row-cols-6 wbrow">
        <div class="col wbbcol">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="2,1" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                </label>
                </div>
            </div>
            <div class="col wbbcol">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="2,2" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                </label>
                </div>
            </div>
            <div class="col wbbcol">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="2,3" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                </label>
                </div>
            </div>
            <div class="col wbbcol">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="2,4" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                </label>
                </div>
            </div>
            <div class="col wbbcol">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="2,5" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                </label>
                </div>
            </div>
            <div class="col wbbcol">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="2,6" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                </label>
                </div>
            </div>
            </div>
            <div class="row row-cols-6 wbrow">
            <div class="col wbbcol">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="3,1" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                </label>
                </div>
            </div>
            <div class="col wbbcol">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="3,2" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                </label>
                </div>
            </div>
            <div class="col wbbcol">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="3,3" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                </label>
                </div>
            </div>
            <div class="col wbbcol">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="3,4" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                </label>
                </div>
            </div>
            <div class="col wbbcol">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="3,5" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                </label>
                </div>
            </div>
            <div class="col wbbcol">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="3,6" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                </label>
                </div>
            </div>
            </div>
        <div class="row row-cols-6 wbrow">
        <div class="col wbbcol">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="4,1" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                </label>
                </div>
            </div>
            <div class="col wbbcol">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="4,2" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                </label>
                </div>
            </div>
            <div class="col wbbcol">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="4,3" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                </label>
                </div>
            </div>
            <div class="col wbbcol">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="4,4" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                </label>
                </div>
            </div>
            <div class="col wbbcol">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="4,5" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                </label>
                </div>
            </div>
            <div class="col wbbcol">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="4,6" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                </label>
                </div>
            </div>
            </div>
        <div class="row row-cols-6 wbrow">
        <div class="col wbbcol">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="5,1" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                </label>
                </div>
            </div>
            <div class="col wbbcol">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="5,2" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                </label>
                </div>
            </div>
            <div class="col wbbcol">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="5,3" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                </label>
                </div>
            </div>
            <div class="col wbbcol">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="5,4" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                </label>
                </div>
            </div>
            <div class="col wbbcol">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="5,5" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                </label>
                </div>
            </div>
            <div class="col wbbcol">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="5,6" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                </label>
                </div>
            </div>
            </div>
        <div class="row row-cols-6 wbrow">
        <div class="col wbbcol">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="6,1" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                </label>
                </div>
            </div>
            <div class="col wbbcol">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="6,2" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                </label>
                </div>
            </div>
            <div class="col wbbcol">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="6,3" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                </label>
                </div>
            </div>
            <div class="col wbbcol">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="6,4" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                </label>
                </div>
            </div>
            <div class="col wbbcol">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="6,5" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                </label>
                </div>
            </div>
            <div class="col wbbcol">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="6,6" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                </label>
                </div>
            </div>
            </div>
        </div>
        <Reset/>        
        <button className="reset">Set in motion</button>
        <Pause/>        
        <button className="reset">Increase Board</button>

    </div>

    
    )
    
}

export default Board