import React from 'react'

export default function Register_form() {
  return (
    <>
    <form className='register' action="">
        <h3> register</h3>
        <div>
            <label htmlFor='username' >Fullname </label>
            <input type="text" autoComplete='off' name = "username" id='username' />
        </div>
         <div>
            <label htmlFor='email' >email </label>
            <input type="text" autoComplete='off' name = "email" id='email' />
        </div>
         <div>
            <label htmlFor='phone' >Fullname </label>
            <input type="text" autoComplete='off' name = "phone" id='phone' />
        </div>
         <div>
            <label htmlFor='password' >Fullname </label>
            <input type="password" autoComplete='off' name = "password" id='password' />
        </div>

        <button type='submit'>Register</button>
    </form>
    </>
  )
}
