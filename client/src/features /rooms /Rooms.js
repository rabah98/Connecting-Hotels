import {React, useState} from 'react';
import { fetchAddroom } from './roomsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Rooms = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state.user)
    const navigate = useNavigate()
    if ( currentUser.status !== "idle" ) navigate('/notFound')
    const [formData, setFormData] = useState({
        type: "",
        price: "",
        image: "",
        hotel_id: "",
    });
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
    };
    function handleSubmit (e) {
        e.preventDefault();
        dispatch(fetchAddroom(formData));
    }
    return (
        <div className='add-room'>
            <h1>Add your hotel rooms</h1>
            <form onSubmit={handleSubmit} >
                <input
                    type="text" 
                    id="type" 
                    name="type" 
                    placeholder="Room type.." 
                    value={formData.type}
                    onChange={handleChange}
                />
                <input 
                    type="number" 
                    id="price" 
                    name="price" 
                    placeholder="Room price.." 
                    value={formData.price}
                    onChange={handleChange}
                />
                <input
                    id="image"
                    type="text"
                    name="image"
                    placeholder="Room picture.." 
                    value={formData.image}
                    onChange={handleChange}
                />
                <input
                    id='id'
                    name='hotel_id'
                    type="number"
                    placeholder="hotel id.." 
                    value={formData.hotel_id}
                    onChange={handleChange}
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Rooms;