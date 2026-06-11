"use client"
import { Star } from "@gravity-ui/icons";
import Link from "next/link";
import { Magnifier } from '@gravity-ui/icons';
import { useState, useEffect, useMemo } from "react";

const Coursepage = () => {
const [datas, setDatas]=useState([]);
const [searchQuery, setSearchQuery]=useState("");
const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch("https://skillsphareapp.vercel.app/data.json",{cache:"no-store"})
            .then(res=>res.json())
            .then(data=>{
                setDatas(data);
                 setLoading(false);
            });
    },[]);
    const filtered=useMemo(()=>{
        const q=searchQuery.toLowerCase();
        return datas.filter(d=>
            d.title?.toLowerCase().includes(q) ||
            d.description?.toLowerCase().includes(q) ||
            d.instructor?.toLowerCase().includes(q)
        );
    }, [searchQuery,datas]);
    if (loading) return (
    <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-blue-600"></span>
    </div>)

    return (
        <div className="max-w-7xl mx-auto px-4">
          <div className="mt-10 flex flex-col gap-3 md:flex-row md:gap-0 justify-between items-center">
                <p className="font-bold text-2xl">All Courses</p>
                <div className="relative">
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">
                        <Magnifier></Magnifier>
                    </span>
                    <input className="border border-gray-300 rounded-sm px-9 p-1 w-full md:w-auto" placeholder="Search Courses..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-3 mt-10 mb-10">
                {filtered.map((data)=>{
                    return (
                        <div key={data.id} className="shadow-lg p-8 rounded-md flex flex-col h-full">
                            <img src={data.image} className="w-full h-48 object-cover" alt="" />
                            <p className="font-bold text-2xl mt-5">{data.title}</p>
                            <p className="mt-4 text-gray-600 font-semibold grow">{data.description}</p>
                            <div className="flex justify-between items-center mt-5">
                                <div className="flex items-center gap-2">
                                    <img src={data.instructor_photo} className="w-10 h-10" alt="" />
                                    <p className="font-bold">{data.instructor}</p>
                                </div>
                                <p className="flex items-center gap-1"><Star></Star>{data.rating}</p>
                            </div>
                            <Link href={`/Courses/${data.id}`}><button className="btn w-full mt-10 btn-info">View Details</button></Link>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Coursepage;