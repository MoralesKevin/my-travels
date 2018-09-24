import React from "react";

const Travels = ({photo, destination, country, distance}) => (
    <figure>
        <img src={photo} alt={destination}/>
        <figcaption>
            <h1>{country}</h1>
            <h3>{destination}</h3>
            <p>{distance}</p>
        </figcaption>

    </figure>
);

export default Travels;