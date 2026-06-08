import { ArrowRight } from '@gravity-ui/icons';
const Learningjourney = () => {
    return (
        <section className='container mx-auto text-center mb-10 px-4'>
            <div className='p-6 sm:p-10 md:p-16 lg:p-20 bg-[#193CB8] text-white rounded-md'>
                <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 leading-tight'>
                    Start Your Learning Journey Today!
                </h2>
                <p className='mb-4 md:mb-5 text-base md:text-lg text-gray-300 max-w-xl mx-auto'>
                    Join thousands of learners building in-demand skills and advancing their careers.
                </p>
                <button className='flex items-center mx-auto font-semibold text-lg md:text-xl lg:text-xl btn p-4 btn-success text-white'>
                    Join Now <ArrowRight />
                </button>
            </div>
        </section>
    );
};

export default Learningjourney;