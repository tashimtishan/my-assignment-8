'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';

const Signinpage = () => {
    const onSubmit=async(e)=>{
        e.preventDefault();
          const email = e.target.email.value;
          const password = e.target.password.value;
        const {data,error}=await authClient.signUp.email({
            password,
            email,
        })
        console.log({data,error})
    }
    return (
<div className='flex justify-center'>
 <form onSubmit={onSubmit}>
  <fieldset className="fieldset bg-base-200 border-base-300 w-96 rounded-box border p-5 mb-10">
  <legend className="fieldset-legend font-bold text-2xl">Sign In</legend>

  <label className="label">Email</label>
  <input name="email" type="email" className="input w-full" placeholder="Enter Your Email" />

  <label className="label">Password</label>
  <input name="password" type="password" className="input w-full" placeholder="Enter Your Password" />

    <button type="submit" className="btn btn-neutral mt-30">Sign In</button>
</fieldset>
 </form>
</div>
    );
};

export default Signinpage;