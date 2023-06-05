import React from 'react';
import './card.css'

// type props = { src: string, title: string }

const Card = (props) => {
    return (
        <div className="photo">
            <img src={props?.src}></img>
            <div className="textp">{ props?.title }</div>
        </div>
    );
};

export default Card;