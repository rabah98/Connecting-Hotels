import e from 'cors';
import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userEditReservedRoom } from '../user/usersSlice';

const EditReservationForm = ({room}) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user)
    const [endDateStart, SetEndDateStart] = useState('')
    function handleStartDate(e) {
        SetEndDateStart(e.target.value)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }
    const [formData, setFormData] = useState({
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
        dispatch(userEditReservedRoom(room.id, formData));
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='boking-form' >
                <label htmlFor="start">Check-in</label>
                <input
                    onChange={handleStartDate}
                    type="date" 
                    id="start" 
                    name="checkin"
                    min="2022-10-06"
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
                <button className="search-button" ><span>Submit </span></button>
            </form>
        </div>
    );
};

export default EditReservationForm;