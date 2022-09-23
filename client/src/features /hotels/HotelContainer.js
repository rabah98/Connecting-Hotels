import React from 'react';

const HotelContainer = ({hotel}) => {
    return (
        <div className='hotel-card'>
            <card className= 'card'>
                <img className='hotel-img' src={hotel.picture} />
                <h1>{hotel.name}</h1>
                <p>{hotel.location}</p>
                <p>starting from</p>
                <p>rating</p>
                <p>review</p>
                
            </card>
        </div>
    );
};

export default HotelContainer;