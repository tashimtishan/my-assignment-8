'use client'
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signuppage = () => {
    const router = useRouter()
    const onSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.imageUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const formdata = {
            name,
            image,
            password,
            email,
        }
        console.log(formdata)
        const { data, error } = await authClient.signUp.email({
            name,
            image,
            password,
            email,
        })
        console.log({ data, error })
        if (error) {
            toast.error(error.message)
        } else {
            toast.success("Registration successful!")
            setTimeout(() => router.push("/signin"), 1500)
        }
        }
         const handlegooglesignin = async () => {
            const data = await authClient.signIn.social({
                provider: "google",
            });
    }
    return (
        <div className='flex justify-center mt-10'>
            <ToastContainer position="top-right" autoClose={1500} />
            <form onSubmit={onSubmit}>
                <fieldset className="w-96 fieldset bg-base-200 border-base-300 md:w-124 lg:w-124 rounded-box border p-5 mb-10">
                    <h2 className="fieldset-legend font-bold text-2xl">Create your Account</h2>

                    <label className="label">Name</label>
                    <input name="name" type="text" className="input w-full" placeholder="Enter Your Name" />
                    <label className="label">Image URL</label>
                    <input name="imageUrl" type="text" className="input w-full" placeholder="Enter Your Image URL" />
                    <label className="label">Email</label>
                    <input name="email" type="email" className="input w-full" placeholder="Enter Your Email" />

                    <label className="label">Password</label>
                    <input name="password" type="password" className="input w-full" placeholder="Enter Your Password" />

                    <button type="submit" className="btn bg-sky-600 text-white mt-30">Register</button>
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

export default Signuppage;