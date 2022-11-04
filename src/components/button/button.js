import React from "react";

import './button.css'

const changeColor = () => {
   document.querySelector('.card').style.backgroundColor= 'purple'
}

const Button = () => {
    return <button className="btn" onClick={changeColor}>Alterar cor do card</button>
}

export default Button