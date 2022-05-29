import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'hooks/use-auth';
import { useDispatch } from 'react-redux';
import { removeUser } from 'store/slices/useSlice';

export default function HomePage() {
  const from = useLocation();
  const dispatch = useDispatch();
  const { isAuth, id, email } = useAuth();
  const logout = () => {
    dispatch(removeUser());
  }
  return (
    <>
      <h1>HomePage</h1>
      <div>
        <span>email: </span>
        <span>{email}</span>
      </div>
      <div>
        <span>id: </span>
        <span>{id}</span>
      </div>
      { !isAuth && (
        <Navigate to='/login' state={{ from }} replace />
      )}
      <button onClick={logout}>Log out</button>
    </>
  )
}
