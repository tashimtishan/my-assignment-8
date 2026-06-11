'use client'
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signinpage = () => {
    const router=useRouter();
    const onSubmit=async(e)=>{
        e.preventDefault();
          const email = e.target.email.value;
          const password = e.target.password.value;
        const {data,error}=await authClient.signIn.email({
            password,
            email,
        })
        console.log({data,error})
        if (error) {
            toast.error("Invalid email or password")
        } else {
            toast.success("Welcome back!")
            setTimeout(() => router.push("/"), 1500)
        }
    }
     const handlegooglesignin = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    }
    return (
<div className='flex justify-center mt-10'>
     <ToastContainer position="top-right" autoClose={1500} />
 <form onSubmit={onSubmit}>
  <fieldset className="w-96 fieldset bg-base-200 border-base-300 md:w-124 lg:w-124 rounded-box border p-5 mb-10">
  <h2 className="fieldset-legend font-bold text-2xl">Sign In</h2>

  <label className="label">Email</label>
  <input name="email" type="email" className="input w-full" placeholder="Enter Your Email" />

  <label className="label">Password</label>
  <input name="password" type="password" className="input w-full" placeholder="Enter Your Password" />

    <button type="submit" className="btn bg-sky-600 text-white mt-30">Sign In</button>
    <div className="divider">OR</div>
<button onClick={handlegooglesignin} type="button" className="btn w-full flex items-center gap-2 bg-white text-gray-700 border border-gray-300 hover:bg-gray-100">
  <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
  Continue with Google
</button>
</fieldset>
 </form>
</div>
    );
};

export default Signinpage;