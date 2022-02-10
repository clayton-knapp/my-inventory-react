import React from 'react';
import '../App.css';

export default function AuthPage() {

  function handleSignInSubmit(e) {

  }


  function handleSignUpClick(){

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
            <input
              // onChange={(e)=>setEmailForm(e.target.value)}
            ></input>
          </label>
          <label>
            Password: 
            <input
              // onChange={(e)=>setEmailForm(e.target.value)}
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
