import React from 'react';
import '../App.css';
import { useState } from 'react';
import { signUpUser, signInUser } from '../services/fetch-utils';

export default function AuthPage({ setUser }) {
  //track State of email and password
  const [emailForm, setEmailForm] = useState('');
  const [passwordForm, setPasswordForm] = useState('');

  async function handleSignInSubmit(e) {
    e.preventDefault();
    const user = await signInUser(emailForm, passwordForm);
    console.log(user);
    setUser(user);
  }


  async function handleSignUpClick(){
    const user = await signUpUser(emailForm, passwordForm);
    console.log(user);
    setUser(user);
  }

  return (
    <div className='sign-in-page'>
      <h3>Sign Up/Sign In</h3>
      <div>
        <form action="" className='sign-in-form'
          onSubmit={handleSignInSubmit}
        >
          <label>
            Email: 
            <input required type='email'
              onChange={(e)=>setEmailForm(e.target.value)}
            ></input>
          </label>
          <label>
            Password: 
            <input required type='password'
              onChange={(e)=>setPasswordForm(e.target.value)}
            ></input>
          </label>
          <button>Sign-In</button>
          <button
            onClick={handleSignUpClick}
          >Sign-Up</button>

        </form>
      </div>

    </div>
  );
}
