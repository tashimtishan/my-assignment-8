'use client'
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useEffect } from 'react';

const Myprofilepge = () => {
    const { data: session, isPending } = authClient.useSession();
    const router = useRouter();
    useEffect(() => {
        if (!isPending && !session) {
            router.push('/signin');
        }
    }, [session, isPending, router]);
    if (isPending) return (
        <div className="flex justify-center items-center min-h-screen">
            <span className="loading loading-spinner loading-lg text-blue-600"></span>
        </div>
    );

    if (!session) return null;
    return (
        <div className="min-h-screen bg-[#F7F7F7] flex justify-center items-start py-16 px-4">
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-md overflow-hidden">
                <div className="h-28 bg-linear-to-r from-blue-900 via-blue-700 to-cyan-500" />
                <div className="flex flex-col items-center -mt-14 px-6 pb-8">
                    {session.user.image ? (
                        <Image
                            src={session.user.image}
                            alt="profile"
                            width={96}
                            height={96}
                            className="rounded-full border-4 border-white shadow-md object-cover w-24 h-24"
                        />) : (
                        <div className="w-24 h-24 rounded-full border-4 border-white shadow-md bg-blue-700 flex items-center justify-center text-white text-3xl font-bold">
                            {session.user.name?.charAt(0).toUpperCase()}
                        </div>
                    )}
                    <h2 className="mt-4 text-2xl font-bold text-gray-800">{session.user.name}</h2>
                    <p className="text-gray-500 text-sm mt-1">{session.user.email}</p>
                    <div className="w-full mt-6 border-t pt-6 flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-500 font-medium">Full Name</span>
                            <span className="text-gray-800 font-semibold">{session.user.name}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-500 font-medium">Email</span>
                            <span className="text-gray-800 font-semibold">{session.user.email}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-500 font-medium">Account Status</span>
                            <span className="badge badge-success text-white">Active</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Myprofilepge;