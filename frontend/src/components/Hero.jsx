import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row border border-gray-400'>
            {/* Hero Left Side */}
            <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
                <div className='text-[#414141]'>
                    <div className='flex items-center gap-2'>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'>

                        </p>
                        <p className='font-medium text-sm md:text-base'>
                            OUR BESTSELLERS
                        </p>
                    </div>
                    <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed font-bold'>Latest Arrivals</h1>
                    <Link to="/collection" className='flex items-center gap-2 cursor-pointer'>
                        <p className='font-semibold text-sm md:text-base'>
                            SHOP NOW
                        </p>
                        <p className='w-8 md:w-11 h-[1.5px] bg-[#414141]'></p>
                    </Link>
                </div>
            </div>


            {/* Hero Right Side */}
            <div className='w-full sm:w-1/2'>
                <img className='w-full h-full object-cover' src='https://static.vecteezy.com/system/resources/previews/033/238/150/non_2x/a-vibrant-woman-with-vintage-hair-and-a-lavender-top-exuding-elegance-and-charm-in-her-minimalist-attire-generative-ai-free-photo.jpg' alt='image' />
            </div>

        </div>
    )
}

export default Hero
