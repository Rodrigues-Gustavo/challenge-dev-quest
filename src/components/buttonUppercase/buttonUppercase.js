import React from "react";

import './buttonUppercase.css'

const changeLetterToUppercase = () => {
    document.querySelector('.card').style.textTransform= 'uppercase'
}

const ButtonUppercase = () => {
    return <button className="btnUppercase" onClick={changeLetterToUppercase}>Alterar letra do cartão</button>
}

export default ButtonUppercase