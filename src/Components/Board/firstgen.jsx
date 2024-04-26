import React from 'react'
import './boardStyles.css'
import wb from '../Assets/wb.svg'

const Board = () => {
    return (
<div class="container1">
    <div class="container2" className="firstBoard" >
        <div class="row row-cols-6 wbrow">
            <div class="col wbbcol"><img src={wb} className="wbb" alt="alive" /></div>
            <div class="col wbbcol"><img src={wb} className="wbb" alt="alive" /></div>
            <div class="col wbbcol"><img src={wb} className="wbb" alt="alive" /></div>
            <div class="col wbbcol"><img src={wb} className="wbb" alt="alive" /></div>
            <div class="col wbbcol"><img src={wb} className="wbb" alt="alive" /></div>
            <div class="col wbbcol"><img src={wb} className="wbb" alt="alive" /></div>
            </div>
        <div class="row row-cols-6 wbrow">
            <div class="col wbbcol"><img src={wb} className="wbb" alt="alive" /></div>
            <div class="col wbbcol"><img src={wb} className="wbb" alt="alive" /></div>
            <div class="col wbbcol"><img src={wb} className="wbb" alt="alive" /></div>
            <div class="col wbbcol"><img src={wb} className="wbb" alt="alive" /></div>
            <div class="col wbbcol"><img src={wb} className="wbb" alt="alive" /></div>
            <div class="col wbbcol"><img src={wb} className="wbb" alt="alive" /></div>
            </div>
            <div class="row row-cols-6 wbrow">
            <div class="col wbbcol"><img src={wb} className="wbb" alt="alive" /></div>
            <div class="col wbbcol"><img src={wb} className="wbb" alt="alive" /></div>
            <div class="col wbbcol"><img src={wb} className="wbb" alt="alive" /></div>
            <div class="col wbbcol"><img src={wb} className="wbb" alt="alive" /></div>
            <div class="col wbbcol"><img src={wb} className="wbb" alt="alive" /></div>
            <div class="col wbbcol"><img src={wb} className="wbb" alt="alive" /></div>
            </div>
        <div class="row row-cols-6 wbrow">
            <div class="col wbbcol"><img src={wb} className="wbb" alt="alive" /></div>
            <div class="col wbbcol"><img src={wb} className="wbb" alt="alive" /></div>
            <div class="col wbbcol"><img src={wb} className="wbb" alt="alive" /></div>
            <div class="col wbbcol"><img src={wb} className="wbb" alt="alive" /></div>
            <div class="col wbbcol"><img src={wb} className="wbb" alt="alive" /></div>
            <div class="col wbbcol"><img src={wb} className="wbb" alt="alive" /></div>
            </div>
        <div class="row row-cols-6 wbrow">
            <div class="col wbbcol"><img src={wb} className="wbb" alt="alive" /></div>
            <div class="col wbbcol"><img src={wb} className="wbb" alt="alive" /></div>
            <div class="col wbbcol"><img src={wb} className="wbb" alt="alive" /></div>
            <div class="col wbbcol"><img src={wb} className="wbb" alt="alive" /></div>
            <div class="col wbbcol"><img src={wb} className="wbb" alt="alive" /></div>
            <div class="col wbbcol"><img src={wb} className="wbb" alt="alive" /></div>
            </div>
        <div class="row row-cols-6 wbrow">
            <div class="col wbbcol"><img src={wb} className="wbb" alt="alive" /></div>
            <div class="col wbbcol"><img src={wb} className="wbb" alt="alive" /></div>
            <div class="col wbbcol"><img src={wb} className="wbb" alt="alive" /></div>
            <div class="col wbbcol"><img src={wb} className="wbb" alt="alive" /></div>
            <div class="col wbbcol"><img src={wb} className="wbb" alt="alive" /></div>
            <div class="col wbbcol"><img src={wb} className="wbb" alt="alive" /></div>
            </div>
        </div>
        <button className="reset">Reset</button>
        <button className="reset">Set in motion</button>
        <button className="reset">||</button>
        <button className="reset">Increase Board</button>




    </div>
    
    )
}

export default Board