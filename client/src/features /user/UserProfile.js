import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deletCurrentUser } from './usersSlice';

const UserProfil = () => {
    const navigate = useNavigate()
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch()
    function handleLogout() {
        dispatch(deletCurrentUser())
        navigate('/')
    }
    console.log(user)
    return (
        <div>
            <h1>{user.first_name}</h1>
            <h1>{user.last_name}</h1>
            <button onClick={handleLogout}>Log out</button>
        </div>
    );
};

export default UserProfil;