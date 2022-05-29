import { useState } from 'react';
import Form from './Form';
import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, useLocation } from 'react-router-dom';
import { setUser } from 'store/slices/useSlice';

const SignUp = () => {
  const dispatch = useDispatch();
  const from = useLocation();
  const navigate = useNavigate();
  const handleSignUp = ({ email, password }) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user: { email, uid, accessToken } } = userCredential;
        dispatch(setUser({
          email,
          id: uid,
          token: accessToken,
        }));
        const state = { from };
        const replace = true;
        navigate('/', { state, replace });
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
        title="Sign Up"
        callback={handleSignUp}
      />
    </div>
  )
};

export default SignUp;