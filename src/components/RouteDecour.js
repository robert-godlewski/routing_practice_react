import React from 'react';
import {useParams} from 'react-router-dom';

const RouteDecour = (props) => {
    const {info, font_color, bg_color} = useParams();

    return (
        <h1 style={{
            color: font_color,
            backgroundColor: bg_color
        }}>{isNaN(info) ? "The word is:" : "The number is:"} {info}</h1>
    );
}

export default RouteDecour;