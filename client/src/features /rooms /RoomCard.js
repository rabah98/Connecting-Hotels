import e from 'cors';
import {React, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservRoom } from '../user/usersSlice';
import { deletReservedRoom } from '../user/usersSlice';

const RoomCard = (room) => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user.user)
    const [ isBooked, setIsBooked] = useState(false)
    const [endDateStart, SetEndDateStart] = useState('')
    function handleStartDate(e) {
        SetEndDateStart(e.target.value)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }
    const [formData, setFormData] = useState({
        room_id: room.room.id,
        user_id: user.id,
        checkin: 0,
        checkout: 0,
        guests: 0,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(fetchReservRoom(formData))
        setIsBooked(!isBooked)
    }

    function handleUnBooking () {
        dispatch(deletReservedRoom(room.room.id))
        setIsBooked(!isBooked)
    }
   
     return (
        <div className='room-card-div'>
            <h1>{room.room.room_type}</h1>
            <img className='room-card-img' src={room.room.image} alt="room picture" />
            <h1>${room.room.price}</h1>
            { user.id ? 
                isBooked ? 
                    <button class="search-button" onClick={handleUnBooking} > Cancel booking</button>
                    : 
                    <form onSubmit={handleSubmit} >
                        <label htmlFor="start">Check-in</label>
                        <input
                            onChange={handleStartDate}
                            type="date" 
                            id="start" 
                            name="checkin"
                            min="2022-10-01"
                            max="2022-12-31"
                            placeholder="Select date" 
                        >
                        </input>
                        <label htmlFor="end">Check-out</label>
                        <input 
                            type="date" 
                            id="end" 
                            name="checkout"
                            onChange={handleChange}
                            min={endDateStart} 
                            max="2022-12-31"
                            placeholder="Select date" 
                            >
                        </input>
                        <label >Guests</label>
                        <input 
                            type="number"
                            name="guests"
                            onChange={handleChange}
                            min="1"
                            max="3"
                        >
                        </input>
                        <button class="search-button" ><span>Book </span></button>
                    </form>
            : <h1>Please login/signup to book a room</h1>
            }
            
        </div>
    );
};

export default RoomCard;