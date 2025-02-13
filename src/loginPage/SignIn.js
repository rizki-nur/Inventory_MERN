import React from 'react'
import { useState } from 'react'

export default function SignIn() {

const [loginValue, setLoginValue] = useState({username: "", password: ""})

const setLogin = (e) => {
    console.log(e.target.name, e.target.value);
    const {name, value} = e.target;
    setLoginValue((prevValue) => ({
        ...prevValue,
        [name]: value,
    }));
};

const handleLogin = (e) => {
    e.preventDefault()
}

  return (
    <div class="card">
        <h5 class="card-header">Sign in</h5>
        <div class="card-body">
            
            <form className='needs-validation' noValidate>
                <div className='row g-3'>
                    <div className='col-12'>

                        <input 
                            type='text'
                            className='form-control'
                            id='username'
                            name='username'
                            value={loginValue.username}
                            onChange={setLogin}
                            placeholder='Username...'
                            required
                        />

                    </div>
                    <div className='col-12'>
                        
                        <input 
                            type='text'
                            className='form-control'
                            id='password'
                            name='password'
                            value={loginValue.password}
                            onChange={setLogin}
                            placeholder='Password...'
                            required
                        />

                    </div>
                    <button
                        onClick={''}
                        className='w-100 btn btn-primary btn-lg'
                        type='submit'
                    > Log in </button>
                </div>
            </form>
        </div>
    </div>
  )
}
