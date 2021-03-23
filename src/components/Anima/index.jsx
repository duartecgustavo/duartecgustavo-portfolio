import React from 'react'

import "./anima.css";

const anima = () => {
    setTimeout(() => {
        document.getElementById('bg-anima').style="display:none";
    },3000)
    return (

        <div className="bg-anima" id="bg-anima">
            <div className="anima">
                <div className="centerLazy">
                    <div className="textLazy">LOADING</div>
                    <div className="ring"></div>
                </div>
                {/* <img className="h-100" src="imgs/this-is-my-coding-face.gif"/> */}
            </div>
        </div>
    )
}

export default anima;