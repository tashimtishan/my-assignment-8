import {BookOpen} from '@gravity-ui/icons';
import {Clock} from '@gravity-ui/icons';
const Learningtips = () => {
    return (
       <div className='container mx-auto mb-10 px-4'>
            <p className='font-bold text-lg text-blue-600'>Learning Tips</p>
            <h2 className='font-semibold text-2xl md:text-4xl mb-8'>Smart Ways to Learn</h2>

            <div className='flex flex-col md:flex-row justify-between gap-5'>
                <div className='flex items-center p-5 md:p-10 rounded-md bg-sky-200 w-full'>
                    <span className='shrink-0'>
                        <BookOpen className='w-12 h-12 md:w-20 md:h-20 mr-4 md:mr-5' />
                    </span>
                    <div>
                        <p className='font-bold text-xl md:text-3xl mb-2'>Effective Study Techniques</p>
                        <p className='mb-5 font-semibold text-sm md:text-base'>
                            Use active recall, mind maps, and spaced repetition to retain information better and learn smarter.
                        </p>
                        <p className='font-semibold text-md text-sky-700'>Read More</p>
                    </div>
                </div>
                <div className='flex items-center bg-green-300 p-5 md:p-10 rounded-md w-full'>
                    <span className='shrink-0'>
                        <Clock className='w-12 h-12 md:w-20 md:h-20 mr-4 md:mr-5' />
                    </span>
                    <div>
                        <p className='font-bold text-xl md:text-3xl mb-2'>Time Management Tips</p>
                        <p className='mb-5 font-semibold text-sm md:text-base'>
                            Plan your day, set priorities, and avoid distractions to stay productive and achieve your goals.
                        </p>
                        <p className='font-semibold text-md text-sky-700'>Read More</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Learningtips;