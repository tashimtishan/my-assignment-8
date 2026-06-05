import { Star } from "@gravity-ui/icons";
import {Books} from '@gravity-ui/icons';
import {ClockFill} from '@gravity-ui/icons';

const CourseDetailspage = async({params}) => {
    const {id}=await params;
    console.log("id no:",id);
     const fetchdata= await fetch("http://localhost:3000/data.json")
    const datas=await fetchdata.json();
    const Coursedetail=datas.find(c=>c.id==id)
    console.log(Coursedetail)
    return (
         <section className="px-5 py-10 bg-[#F7F7F7]">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-xl">
        <img
          src={Coursedetail.image}
          alt={Coursedetail.title}
          className="w-full h-80 object-cover rounded-xl"
        />

        <div className="mt-6">
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
            {Coursedetail.category}
          </span>

          <h1 className="text-4xl font-bold mt-4">
            {Coursedetail.title}
          </h1>

          <p className="text-gray-600 mt-4">
            {Coursedetail.description}
          </p>

          <div className="flex gap-6 mt-6 text-gray-700">
            <p className="flex items-center gap-1"><Star></Star> {Coursedetail.rating}</p>
            <p className="flex items-center gap-1"> <Books></Books>{Coursedetail.level}</p>
            <p className="flex items-center gap-1"><ClockFill></ClockFill> {Coursedetail.duration}</p>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <img
              src={Coursedetail.instructor_photo}
              alt={Coursedetail.instructor}
              className="w-14 h-14 rounded-full"
            />

            <div>
              <h3 className="font-semibold">
                {Coursedetail.instructor}
              </h3>
              <p className="text-sm text-gray-500">
                {Coursedetail.major}
              </p>
            </div>
          </div>

          <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Enroll Now
          </button>
        </div>
      </div>
    </section>
    );
};

export default CourseDetailspage;