import React from 'react';

const UserRooms = ({room}) => {
    console.log(room)
    function handleUnBooking () {
        fetch(`/reserved_rooms/${room.id}`, {
        method: "DELETE",
        })
    }
   
    return (
        <div>
            <img src={room.image} />
            <h1>{room.room_type}</h1>
            <h1>{room.price}</h1>
            <button onClick={handleUnBooking} >cancel</button>
        </div>
    );
};

export default UserRooms;