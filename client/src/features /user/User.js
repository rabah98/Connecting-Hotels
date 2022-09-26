import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from './usersSlice';

const User = () => {
    const currentUser = useSelector((state) => state.user.user)
    console.log(currentUser)
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        image_url: "",
        username: "",
        password: "",
        password_confirmation: "",
        email: "",
      });
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    function handleSubmit (e) {
        e.preventDefault();
        dispatch(fetchUser(formData));
        { currentUser.error === 'Not authorized' ? navigate('/Signup' ) : navigate('/Profile' )}
    }
    return (
        <div className='signup-form'>
            <h1>Welcome to Connecting Hotel</h1>
            <form onSubmit={handleSubmit} >
                <label htmlFor="fname">First Name</label>
                <input
                    type="text" 
                    id="fname" 
                    name="first_name" 
                    placeholder="Your name.." 
                    value={formData.first_name}
                    onChange={handleChange}
                />

                <label htmlFor="lname">Last Name</label>
                <input 
                    type="text" 
                    id="lname" 
                    name="last_name" 
                    placeholder="Your last name.." 
                    value={formData.last_name}
                    onChange={handleChange}
                />
                <label htmlFor="username">Username:</label>
                <input
                    id="username-signup-input"
                    type="text"
                    name="username"
                    placeholder="Your username.." 
                    value={formData.username}
                    onChange={handleChange}
                />
                <label htmlFor="image_url">Your image_url:</label>
                <input
                    id="image_url-signup-input"
                    type="text"
                    name="image_url"
                    placeholder="Upload your picture.."
                    value={formData.image_url}
                    onChange={handleChange}
                />
                <label htmlFor="email">Email:</label>
                <input
                    id="email-signup-input"
                    type="text"
                    name="email"
                    placeholder="Your email.." 
                    value={formData.email}
                    onChange={handleChange}
                />
                <label htmlFor="password">Password:</label>
                <input
                    id="password-signup-input"
                    type="password"
                    name="password"
                    placeholder="Your password.." 
                    value={formData.password}
                    onChange={handleChange}
                />
                <label htmlFor="password_confirmation">Confirm Password:</label>
                <input
                    id="password_confirmation-signup-input"
                    type="password"
                    name="password_confirmation"
                    placeholder="Confirm your password" 
                    value={formData.password_confirmation}
                    onChange={handleChange}
                />
                <input type="submit" value="Submit" />
            </form>

            <button onClick={() => navigate('/' )}> Back to home </button>
        </div>
    );
};

export default User;