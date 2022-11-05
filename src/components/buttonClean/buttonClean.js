import React from "react";

import './buttonClean.css'

const cleanbtn  = () => {
   document.querySelector('.card').style.backgroundColor= '';
   document.querySelector('.card').style.textTransform= '';
}

const ButtonClean = () => {
    return <button className="btnClean" onClick={cleanbtn}>limpar estilização do texto</button>
}

export default ButtonClean