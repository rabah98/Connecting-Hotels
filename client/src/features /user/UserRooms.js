import {React, useState} from 'react';
import EditReservationForm from '../rooms /EditReservationForm';
import { deletReservedRoom } from './usersSlice';
import { useDispatch } from 'react-redux';

const UserRooms = ({room}) => {
    const [editMode, setEditMode] = useState(false);
    const dispatch = useDispatch()
    
    function handleUnBooking () {
        dispatch(deletReservedRoom(room.id));
    }

    function handleEditBooking() {
        setEditMode(!editMode);
    }
   
    return (
        <div>
            <img className='room-card-img' src={room.image} />
            <h1>{room.room_type}</h1>
            <h1>${room.price}</h1>
            <h2>From {room.checkin} to {room.checkout} with {room.guests} guests</h2>
            <button className="search-button" onClick={handleUnBooking} >cancel your booking</button>
            {editMode ? (
                <div>
                    <EditReservationForm room={room}/>
                    <button className="search-button" onClick={handleEditBooking} >cancel editing</button>
                </div>

            ) : (
            <button className="search-button" onClick={handleEditBooking} >Edit your booking</button>
            )}
        </div>
    );
};

export default UserRooms;