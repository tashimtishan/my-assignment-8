import {BookOpen} from '@gravity-ui/icons';
import {Clock} from '@gravity-ui/icons';
const Learningtips = () => {
    return (
        <div className='container mx-auto mb-10'>
          <p className='font-bold text-lg text-blue-600'>Learning Tips</p>  
          <h2 className='font-semibold text-4xl mb-8'>Smart Ways to Learn</h2>
          <div className='flex justify-between gap-5'>
            <div className='flex items-center p-10 rounded-md bg-sky-200'>
            <span><BookOpen className='w-20 h-20 mr-5'></BookOpen></span>
            <div>
                <p className='font-bold text-3xl mb-2'>Effective Study Techniques</p>
                <p className='mb-5 font-semibold'>Use active recall, mind maps, and spaced repetition to retain information better and learn smarter.</p>
                <p className='font-semibold text-md text-sky-700'>Read More</p>
            </div>
            </div>
            <div className='flex items-center bg-green-300 p-10 rounded-md'>
            <span><Clock className='w-20 h-20 mr-5'></Clock></span>
            <div>
                <p className='font-bold text-3xl mb-2'>Time Management Tips</p>
                <p className='mb-5 font-semibold'>Plan your day, set priorities, and avoid distractions to stay productive and achieve your goals.</p>
                <p className='font-semibold text-md text-sky-700'>Read More</p>
            </div>
            </div>
          </div>
        </div>
    );
};

export default Learningtips;