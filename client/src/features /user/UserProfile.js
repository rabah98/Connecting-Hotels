import {React, useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deletCurrentUser } from './usersSlice';
import { fetchAddHotel } from '../hotels/hotelsSlice';
import { deleteProfile } from './usersSlice';
import UserRooms from './UserRooms';

const UserProfil = () => {
    const default_img_url =
    "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg";
    const navigate = useNavigate()
    const currentUser = useSelector((state) => state.user)
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch()
    useEffect(() => {
        if ( currentUser.status !== "idle" ) navigate('/notFound')
    }, [currentUser.errors])

    function handleDelete() {
        dispatch(deleteProfile(user.id))
        navigate('/Signup')
    }

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
            <div className='profile'>
                <img className='profile-img' src={ user.image_url ? user.image_url : default_img_url} alt="User Image" />
                <h1>{user.first_name} {user.last_name}</h1>
                <h1>{user.username}</h1>
                <h1>{user.email}</h1>
                <button className="search-button" onClick={handleLogout}>Log out</button>
                <br></br>
                <br></br>
                <button className="search-button" onClick={handleDelete}>Delete</button>
            </div>
            <div className='available-rooms' >
                {roomArray()}
            </div>
        </div>
    );
};

export default UserProfil;