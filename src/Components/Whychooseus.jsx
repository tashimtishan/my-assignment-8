import {PersonFill} from '@gravity-ui/icons';
import {GraduationCap} from '@gravity-ui/icons';
import {Aperture} from '@gravity-ui/icons';
import {SealCheck} from '@gravity-ui/icons';
const Whychooseus = () => {
    return (
       <section>
        <div className='container mx-auto mb-8 mt-20 text-center'>
            <p className='font-semibold text-2xl text-blue-600'>Choose us</p>
           <h2 className='font-semibold text-2xl md:text-4xl mb-8'>Because Your Success is Our Mission</h2>
        </div>
        <div className='grid grid-cols-1 p-6 md:grid-cols-2 lg:grid-cols-4 container mx-auto gap-5 mb-8'>
            <div className='p-6 flex flex-col items-center bg-[#DBEAFE] shadow-lg py-20'>
            <PersonFill className='w-10 h-10'></PersonFill>
            <p className='font-bold text-2xl'>Expert Instructors</p>
            <p>Learn from industry professionals.</p>
            </div>
            <div className='p-6 flex flex-col items-center bg-[#DBEAFE] shadow-lg py-20'>
            <GraduationCap className='w-10 h-10'></GraduationCap>
            <p className='font-bold text-2xl'>Hands-on Learning</p>
            <p>Practical Projects and real-world skills.</p>
            </div>
            <div className='p-6 flex flex-col items-center bg-[#DBEAFE] shadow-lg py-20'>
            <Aperture className='w-10 h-10'></Aperture>
            <p className='font-bold text-2xl'>Flexible Learning</p>
            <p className='text-center'>Learn anytime, anywhere at your own pace.</p>
            </div>
            <div className='p-6 flex flex-col items-center bg-[#DBEAFE] shadow-lg py-20'>
            <SealCheck className='w-10 h-10'></SealCheck>
            <p className='font-bold text-2xl'>Certificate</p>
            <p>Earn certificates and boost your career.</p>
            </div>
        </div>
       </section>
    );
};

export default Whychooseus;