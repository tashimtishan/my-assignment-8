'use client'
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React from 'react';

const Signuppage = () => {
    const router=useRouter()
    const onSubmit=async(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
         const image = e.target.imageUrl.value;
          const email = e.target.email.value;
          const password = e.target.password.value;
          const formdata={
            name,
            image,
            password,
            email,
        }
        console.log(formdata)
        const {data,error}=await authClient.signUp.email({
            name,
            image,
            password,
            email,
        })
        console.log({data,error})
        if(!error){
            router.push("/")
        }
    }
    return (
<div className='flex justify-center'>
 <form onSubmit={onSubmit}>
  <fieldset className="fieldset bg-base-200 border-base-300 w-96 rounded-box border p-5 mb-10">
  <legend className="fieldset-legend font-bold text-2xl">Register</legend>

  <label className="label">Name</label>
  <input name="name" type="text" className="input w-full" placeholder="Enter Your Name" />
  <label className="label">Image URL</label>
  <input name="imageUrl" type="text" className="input w-full" placeholder="Enter Your Image URL" />
  <label className="label">Email</label>
  <input name="email" type="email" className="input w-full" placeholder="Enter Your Email" />

  <label className="label">Password</label>
  <input name="password" type="password" className="input w-full" placeholder="Enter Your Password" />

    <button type="submit" className="btn btn-neutral mt-30">Register</button>
</fieldset>
 </form>
</div>
    );
};

export default Signuppage;