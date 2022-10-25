import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../features/login';

export default function View() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const clearUserData = () => {
    dispatch(logout())
  }

  return (
    <div>
      <h3>Name: {user.name}</h3>
      <h3>Age: {user.age}</h3>
      <h3>Email: {user.email}</h3>
      <button onClick={clearUserData}>Clear Data</button>
    </div>
  )
}
