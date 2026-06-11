import { Star } from "@gravity-ui/icons";
import Link from "next/link";

const Highrated = async() => {
     const fetchdata= await fetch("https://skillsphareapp.vercel.app/data.json",{cache:"no-store"})
    const datas=await fetchdata.json();
     console.log(datas)
    return (
        <section className=" container mx-auto  mt-10 mb-5">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
            <p className="font-semibold text-4xl">highest-rated courses</p>
           <Link href={"/Courses"}> <p className="text-sky-800 text-xl font-semibold btn">View All Courses</p></Link>
            </div>
           <div className="grid grid-cols-1 p-4 md:grid-cols-3 container mx-auto gap-5 mt-10 mb-10">
             {datas.slice(0,3).map((data)=>{
               return(
                <div key={data.id} className="shadow-lg rounded-md overflow-hidden flex flex-col h-full">
                    <img src={data.image} className="w-full h-48 object-cover" alt="" />
                    <div className="flex flex-col flex-1 p-8">
                    <p className="font-bold text-2xl mb-2">{data.title}</p>
                    <p className="font-semibold mb-5 grow">{data.description}</p>
                    <div className="flex justify-between items-center mb-8">
                        <div className="flex items-center gap-2">
                        <img src={data.instructor_photo} className="w-10 h-10" alt="" />
                        <p className="font-bold">{data.instructor}</p>
                        </div>
                        <p className="flex items-center gap-1"><Star></Star>{data.rating}</p>
                    </div>
                     <div className="mt-auto">
                        <Link href={`/Courses/${data.id}`}><button className="btn w-full btn-info">View Details</button></Link>
                     </div>
                    </div>
                </div>
               ) 
            })}
           </div>
        </section>
    );
};

export default Highrated;