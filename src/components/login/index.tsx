import { IEvent } from 'Y/interfaces/common/form'
import { signIn } from 'next-auth/react';
import React, { useState } from 'react'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState();
    const handleSumbit = async(e:any) => {
        e.preventDefault();
        const result = await signIn("credentials",{
            email,
            password,
            callbackUrl: ""
        })
    }
    const handleEmailChange = (event: IEvent) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event: IEvent) => {
        setPassword(event.target.value);
    }

  return (
    <div>
        <h2 className='text-2xl'>Login</h2>
        <form onSubmit={handleSumbit}>
            <div className=''>
                <label className='mb-2 block font-bold text-gray-700'
                    htmlFor='email'
                >
                    Email
                </label>
                  <input
                      className='"w-full rounded-md border border-gray-400 p-2'
                      type='email'
                      id="email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                  />
                  <label className='mb-2 block font-bold text-gray-700'
                      htmlFor='password'
                  >
                     password
                  </label>
                  <input
                      className='"w-full rounded-md border border-gray-400 p-2'
                      type='password'
                      id="password"
                      value={password}
                      onChange={handlePasswordChange}
                      required
                  />
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Login;