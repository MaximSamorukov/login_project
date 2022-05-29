import { useState } from 'react';
import Form from './Form';
import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, useLocation } from 'react-router-dom';
import { setUser } from 'store/slices/useSlice';
const Login = () => {
  const dispatch = useDispatch();
  const from = useLocation();
  const navigate = useNavigate();

  const handleLogin = ({ email, password }) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user: { email, uid, accessToken } } = userCredential;
        if (accessToken) {
          dispatch(setUser({
            email,
            id: uid,
            token: accessToken,
          }));
          const state = { from };
          const replace = true;
          navigate('/', { state, replace });
        }
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  return (
    <div>
      <Form
        title="Log in"
        callback={handleLogin}
      />
    </div>
  )
};

export default Login;