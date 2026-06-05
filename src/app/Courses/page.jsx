import { Star } from "@gravity-ui/icons";
import Link from "next/link";
import {Magnifier} from '@gravity-ui/icons';
const Coursepage = async() => {
    const fetchdata= await fetch("http://localhost:3000/data.json")
    const datas=await fetchdata.json();
    console.log(datas)
    return (
           <div className="max-w-7xl mx-auto px-4">
       <div className="mt-10 flex justify-between items-center">
         <p className="font-bold text-2xl">All Courses</p>
         <div className="relative">
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">
                <Magnifier></Magnifier>
            </span>
            <input className=" border border-gray-300 rounded-sm px-9 p-1" placeholder="Search Courses..." type="text" />
         </div>
       </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-3 mt-10 mb-10">
            {datas.map((data)=>{
               return(
                <div key={data.key} className="shadow-lg p-8 rounded-md flex flex-col h-full">
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