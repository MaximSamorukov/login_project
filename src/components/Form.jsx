import { useState } from 'react';

const Form = ({ title, callback }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          marginTop: '10px'
        }}
      >
        <label htmlFor='email'>
          Email
        </label>
        <input
          name="email"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Input email"
        />
      </div>
      <div
        style={{
          marginTop: '10px'
        }}
      >
        <label htmlFor="password">
          Password
        </label>
        <input
          name="password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Input password"
        />
      </div>
      <div
        style={{
          marginTop: '10px'
        }}
      >
        <button
          onClick={() => callback({ email, password })}
        >
          {title}
        </button>
      </div>
    </div>
  )
};

export default Form;