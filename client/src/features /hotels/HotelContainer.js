import { React, useState} from 'react';
import RoomsList from '../rooms /RoomLists';
import { dispachShowRooms } from './hotelsSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HotelContainer = ({hotel}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const [ showRooms, SetShowRooms] = useState(false)
    function handleClick() {
        dispatch(dispachShowRooms(hotel.id))
        navigate('/RoomList')
        // SetShowRooms(!showRooms)
    }
    console.log(hotel)
    return (
        <div className='hotel-card'>
            {/* { showRooms ?  <div><RoomsList rooms={hotel.rooms} /></div> : */}
                <card className= 'card'>
                    <img className='hotel-img' src={hotel.picture} onClick={handleClick} />
                    <h1>{hotel.name}</h1>
                    <h3>Adress: {hotel.location}</h3>
                    <h3>{hotel.city}</h3>
                    <h3>Hotel email: {hotel.email}</h3>
                    <h3>Hotel phone number: {hotel.phone_number}</h3>
                    <p>starting from</p>
                    <p>rating</p>
                    <p>review</p>
                </card>
            {/* } */}
        </div>
    );
};

export default HotelContainer;