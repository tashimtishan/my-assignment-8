import Link from "next/link";

const Highrated = async() => {
     const fetchdata= await fetch("http://localhost:3000/data.json")
    const datas=await fetchdata.json();
     console.log(datas)
    return (
        <section className=" container mx-auto  mt-10 mb-5">
            <div className="flex justify-between items-center">
            <p className="font-semibold text-4xl">highest-rated courses</p>
           <Link href={"/Courses"}> <p className="text-sky-800 text-xl font-semibold btn">View All Courses</p></Link>
            </div>
           <div className="grid grid-cols-3 container mx-auto gap-5 mt-10 mb-10">
             {datas.slice(0,3).map((data)=>{
               return(
                <div key={data.id} className="shadow-lg rounded-md overflow-hidden">
                    <img src={data.image} className="w-full h-48 object-cover" alt="" />
                    <div className="p-8">
                    <p className="font-bold text-2xl mb-2">{data.title}</p>
                    <p className="font-semibold mb-5">{data.description}</p>
                     <Link href={`/Courses/${data.id}`}><button className="btn w-full mt-10 btn-info">View Details</button></Link>
                    </div>
                </div>
               ) 
            })}
           </div>
        </section>
    );
};

export default Highrated;