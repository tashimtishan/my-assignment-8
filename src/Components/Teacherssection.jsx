import {StarFill} from '@gravity-ui/icons';
const Teacherssection = async() => {
     const fetchdata= await fetch("https://skillsphareapp.vercel.app/data.json")
    const datas=await fetchdata.json();
     console.log(datas)
    return (
       <section className='container mx-auto mt-20 px-4'> 
        <div>
            <div>
                <p className='font-semibold text-xl text-blue-600'>Top Instructors</p>
                 <p className='font-semibold text-2xl md:text-4xl mb-5'>Learn from the Best</p>
            </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-5 mb-10">
                {datas.slice(1,5).map((data)=>{
                    return (
                        <div key={data.id}  className='p-6 md:p-10 w-full rounded-md shadow-xl flex flex-col items-center text-center space-y-2'>
                        <>
                        <img key={data.key} src={data.instructor_photo} className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                             alt="" />
                        <p className='font-bold text-lg md:text-xl'>{data.instructor}</p>
                         <p className='text-gray-600 text-sm md:text-base'>{data.major}</p>
                         <p className='flex items-center gap-1 font-semibold text-sm md:text-base'>
                                    <StarFill />{data.rating}
                                </p>
                        </>
                        </div>
                    )
                })}
            </div>
        </div>
       </section>
    );
};

export default Teacherssection;