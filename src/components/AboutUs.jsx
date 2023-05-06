import {Navbar,Footer} from "./index"
import {bgImage,carKeys,carsuv,garage,carShop} from "../assets"
import {Selection} from './Home-Components/index'
const AboutUs = () => {
  return (
    <> 
      <div style={{backgroundImage:`linear-gradient(hsla(0,0%,100%,.92),hsla(0,0%,100%,.92)),url(${bgImage})`,backgroundSize:`cover`,backgroundRepeat:'no-repeat',height:'55vh'}} className='mt-0' >
        <Navbar />
        <div className='ml-10 mt-16'>
        <h1 className=' text-4xl font-bold'>AboutUs</h1>
        <p className='text-lg font-semibold my-3'>Home / About</p>
        </div>
      </div>

        <div className='flex flex-col justify-between items-center w-[85%] my-16 mx-auto md:flex-row'>
            <img src={carKeys} alt='A guy with car keys' className='h-72 md:h-96' />
            <div className='flex flex-col text-center md:text-start w-[90%] my-10 space-y-10 md:w-[50%]'>
              <h3 className='text-xl font-semibold'>About Company</h3>
              <h1 className='text-3xl font-bold md:text-4xl'>You start the engine and your adventure begins</h1>
              <p className='text-slate-500'>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
              <div className='flex flex-wrap justify-evenly items-center md:justify-between flex-row'>
                <div className='flex flex-col items-center m-5'>
                  <img src={carsuv} alt="car showroom" className='w-20' />
                  <p className='text-3xl font-bold my-2'>20</p>
                  <p>Car Types</p>
                </div>
                <div className='flex flex-col items-center  m-5'>
                  <img src={carShop} alt="car showroom " className='w-20'  />
                  <p className='text-3xl font-bold my-2'>34</p>
                  <p>Rental Outlets</p>
                </div>
                <div className='flex flex-col items-center  m-5'>
                  <img src={garage} alt="car showroom" className='w-20' />
                  <p className='text-3xl font-bold my-2'>20</p>
                  <p>Our own garages</p>
                </div>
              </div>
            </div>
        </div>
      
      <Selection />

      <div className='my-20 bg-gray-800 text-center text-white py-10'>
        <div className='text-3xl font-bold w-[90%] mx-auto md:text-5xl md:w-[80%]'>
          <h1>Book a car by getting in touch with us</h1> 
          <p className='text-reddish my-5' >&#9742;  +91 12345 67890</p>
        </div>  
      </div>
      <Footer />

    </>
  )
}

export default AboutUs