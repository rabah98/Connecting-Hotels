import {React, useState} from 'react';
import { useSelector } from 'react-redux';

const RoomCard = (room) => {
    const user = useSelector((state) => state.user.user)
    const [ isBooked, setIsBooked] = useState(false)
    console.log(room.room.id, user.id)
    function handleBooking() {
        fetch("/reserved_rooms", {
            method: "POST",
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify({
                room_id: room.room.id,
                user_id: user.id
            })
        })
        setIsBooked(!isBooked)
    }

    function handleUnBooking () {
        fetch(`/reserved_rooms/${room.room.id}`, {
        method: "DELETE",
        })
        setIsBooked(!isBooked)
    }
   
     return (
        <div>
            <h1>{room.room.room_type}</h1>
            <h1>{room.room.price}</h1>
            <img src={room.room.image} alt="room picture" />
            { user.id ? 
            isBooked ? 
                <button onClick={handleUnBooking} > booked</button> 
                : 
                <button onClick={handleBooking}>Book</button>
            : ""
            }
            
        </div>
    );
};

export default RoomCard;