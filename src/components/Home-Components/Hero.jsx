import Button from '../Button'
import thar from './assets/Mahindra_Thar.jpg';

const Hero = () => {
    
  return (
    <div className='flex items-center w-[90%]  mx-auto md:flex-row md:w-[95%] md:ml-10'>
        <div className='space-y-5'>
            <h4 className='text-center md:text-start font-semibold text-xl'>Plan your trip now</h4>
            <h1 className='text-center md:text-start font-bold text-5xl'>Save <span className='text-reddish'>big</span> with our car rental</h1>
            <p className='text-center md:text-start text-slate-500 text-lg'>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
            <div className='flex flex-col  space-y-5 mx-auto sm:flex-row sm:justify-around sm:space-y-0'>
                <Button text="Book Ride &#10095;" width="px-10" />
                <button className='py-3 bg-black px-10 font-semibold shadow-md shadow-black rounded text-white text-md hover:bg-white hover:text-black hover:outline'>Learn More &#10095;</button>
            </div>
        </div>

        <div className='hidden w-[60%] md:flex md:flex-shrink-0'>
            <img src={thar} alt='car'/>
        </div>
    </div>
  )
}

export default Hero