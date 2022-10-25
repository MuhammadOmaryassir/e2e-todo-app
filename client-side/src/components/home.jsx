import React from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../features/login';
import { useNavigate } from 'react-router-dom';

function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const addData = () => {
        const userData = {
            name: 'Mohammed Ahmed',
            age: 26,
            email: 'mohammedswaaf@gmail.com'
        }
        dispatch(login(userData));
        navigate('/user')
    }
    return (
        <>

            <button onClick={addData}>Add User Data</button>
        </>
    )
}

export default Home