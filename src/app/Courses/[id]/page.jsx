import { Star } from "@gravity-ui/icons";
import {Books} from '@gravity-ui/icons';
import {ClockFill} from '@gravity-ui/icons';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

const CourseDetailspage = async({params}) => {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect('/signin');
    const {id}=await params;
    console.log("id no:",id);
     const fetchdata= await fetch("http://localhost:3000/data.json")
    const datas=await fetchdata.json();
    const Coursedetail=datas.find(c=>c.id==id)
    console.log(Coursedetail)
    return (
          <section className="px-4 sm:px-6 py-8 sm:py-10 bg-[#F7F7F7]">
       <div className="max-w-4xl mx-auto bg-white p-5 sm:p-8 shadow-xl rounded-xl flex flex-col h-full">
        <img
          src={Coursedetail.image}
          alt={Coursedetail.title}
          className="w-full h-52 sm:h-72 lg:h-80 object-cover rounded-xl"
        />

       <div className="mt-5 sm:mt-6">
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
            {Coursedetail.category}
          </span>

           <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4">
            {Coursedetail.title}
          </h1>

         <p className="text-gray-600 mt-4 text-sm sm:text-base">
            {Coursedetail.description}
          </p>

          <div className="flex flex-wrap gap-4 sm:gap-6 mt-6 text-gray-700 text-sm sm:text-base">
            <p className="flex items-center gap-1"><Star></Star> {Coursedetail.rating}</p>
            <p className="flex items-center gap-1"> <Books></Books>{Coursedetail.level}</p>
            <p className="flex items-center gap-1"><ClockFill></ClockFill> {Coursedetail.duration}</p>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <img
              src={Coursedetail.instructor_photo}
              alt={Coursedetail.instructor}
               className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex-shrink-0"
            />

            <div>
            <h3 className="font-semibold text-sm sm:text-base">
                {Coursedetail.instructor}
              </h3>
               <p className="text-xs sm:text-sm text-gray-500">
                {Coursedetail.major}
              </p>
            </div>
          </div>

        <button className="mt-8 w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 text-sm sm:text-base">
            Enroll Now
          </button>
        </div>
      </div>
    </section>
    );
};

export default CourseDetailspage;