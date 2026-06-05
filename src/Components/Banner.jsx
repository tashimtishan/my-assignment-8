import {ArrowRight} from '@gravity-ui/icons';
import Link from 'next/link';
const Banner = () => {
    return (
        <div className="bg-sky-300 px-6 py-12 md:p-20 md:pb-30">
         <div className="flex flex-col md:flex-row container mx-auto gap-10">
             <div className="flex-1">
            <span className=" px-3 py-2 rounded-full bg-linear-to-r from-blue-900 via-blue-700 to-cyan-500 text-white font-semibold">Learn From Industry Experts</span>
          <h2 className="mb-5 mt-5 text-white font-bold text-4xl md:text-7xl">Upgrade Your <br />Skills Today</h2>
          <p className="mb-4 text-lg md:text-2xl">Build the skills that shape your future. From coding to design, join thousands already turning learning into real opportunities.</p>
         <Link href={"/Courses"}><button className="btn mb-6 mt-2 btn-accent flex items-center gap-2 rounded-md px-6 py-3 md:py-5 text-white text-base md:text-lg">Explore Courses<ArrowRight className='h-5 w-5'></ArrowRight></button></Link>
            <div className="flex gap-5 text-center">
                <div>
                    <p className="font-semibold text-2xl md:text-4xl mb-2">20k+</p>
                     <p className="text-xl md:text-3xl text-white">Students</p>
                </div>
                <div>
                    <p className="font-semibold text-2xl md:text-4xl mb-2">50k+</p>
                   <p className="text-xl md:text-3xl text-white">Course</p>
                </div>
                <div>
                   <p className="font-semibold text-2xl md:text-4xl mb-2">4.8</p>
                     <p className="text-xl md:text-3xl text-white">Average Ratings</p>
                </div>
            </div>
           </div> 
         <div className='relative hidden md:block flex-1'>
                <div className='absolute top-10 left-45 flex items-center gap-2 bg-white rounded-xl shadow-lg px-4 py-2'>
                    <span><img src="/4322231.png" className="h-6 w-6" alt="" /></span>
                    <p className='font-bold'>Digital Marketing</p>
                </div>
                <div className='absolute top-20 -right-10 flex items-center gap-2 bg-white rounded-xl shadow-lg px-4 py-2'>
                    <span><img src="/6352331.png" className="h-6 w-6" alt="" /></span>
                    <p className="font-bold text-gray-800">Web Development</p>
                </div>
                <div className='absolute top-1/2 left-30 flex items-center gap-2 bg-white rounded-xl shadow-lg px-4 py-2'>
                    <span><img src="/8448634.png" className="h-6 w-6" alt="" /></span>
                    <p className='font-bold text-gray-800'>UI/UX Design</p>
                </div>
                <img src="/pngwing.com.png" className="h-120 ml-50" alt="" />
              </div>

         </div>
        </div>
    );
};

export default Banner;