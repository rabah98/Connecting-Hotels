import React from 'react';
import RoomCard from './RoomCard';
import { useSelector } from 'react-redux';

const RoomsList = ({}) => {
    const hotels = useSelector((state) => state.hotels)
    const rooms = hotels.hotels[hotels.id].rooms
    const roomsArray = rooms.map( room => <RoomCard key={room.id} room={room} />) 
    return (
        <div>
            {roomsArray}
        </div>
    );
};

export default RoomsList;