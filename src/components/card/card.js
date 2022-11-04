import React from "react";
import './card.css'

const Card = ({children,color,changeColor}) => {
    return(
        <div className='card' style={{backgroundColor: color}} onClick={() =>changeColor(color)}>
            {children}
        </div>
    )
}

Card.defaultProps = {
    color: 'red'
}

export default Card