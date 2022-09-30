import {React, useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deletCurrentUser } from './usersSlice';
import { fetchAddHotel } from '../hotels/hotelsSlice';
import UserRooms from './UserRooms';

const UserProfil = () => {
    const navigate = useNavigate()
    const currentUser = useSelector((state) => state.user)
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch()
    useEffect(() => {
        if ( currentUser.status !== "idle" ) navigate('*')
    }, [currentUser.errors])
    function handleLogout() {
        dispatch(deletCurrentUser())
        navigate('/Login')
    }

    function roomArray()  {
        if (user.rooms) {
            const roomList = user.rooms.map(room => <UserRooms key={room.id} room={room}/>)
            return roomList
        }
    }  
    const [formData, setFormData] = useState({
            name: "",
            location: "",
            picture: "",
            cancellation_policy: "",
            email: "",
            phone_number: "",
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    function handleSubmit (e) {
        e.preventDefault();
        dispatch(fetchAddHotel(formData));
        navigate('/AddRooms')
    }
    return (
        <div className='profile-div'>
            <h1>{user.first_name}</h1>
            <h1>{user.last_name}</h1>
            <div className='add-hotel-div'>
                <h1>List your hotel</h1>
                <form onSubmit={handleSubmit} >
                    <input
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Hotel name.." 
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        id="location" 
                        name="location" 
                        placeholder="Hotel address.." 
                        value={formData.location}
                        onChange={handleChange}
                    />
                    <input
                        id="picture"
                        type="text"
                        name="picture"
                        placeholder="Hotel picture.." 
                        value={formData.picture}
                        onChange={handleChange}
                    />
                    <input
                        id="cancellation-policy"
                        type="text"
                        name="cancellation_policy"
                        placeholder="City.."
                        value={formData.cancellation_policy}
                        onChange={handleChange}
                    />
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Your hotel email.." 
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        id="phone-number"
                        type="number"
                        name="phone_number"
                        placeholder="Your hotel phone number.." 
                        value={formData.phone_number}
                        onChange={handleChange}
                    />
                    <input type="submit" value="Submit" />
                </form>
                <div>
                    {roomArray()}
                </div>
            </div>
            <button className="search-button" onClick={handleLogout}>Log out</button>
        </div>
    );
};

export default UserProfil;