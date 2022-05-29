import React from 'react'
import { Link } from 'react-router-dom'
import SignUp from 'components/SignUp';

export default function RegisterPage() {
  return (
    <div>
      <h1>
        RegisterPage
      </h1>
      <SignUp />
      <p>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </div>
  )
}
