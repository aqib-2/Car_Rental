import {Navbar,Footer} from "./index"
import { bgImage,carData } from '../assets'
import Button from './Button'
const VehicleModels = () => {
  return (
    <>
      <div style={{backgroundImage:`linear-gradient(hsla(0,0%,100%,.92),hsla(0,0%,100%,.92)),url(${bgImage})`,backgroundSize:`cover`,backgroundRepeat:'no-repeat',height:'55vh'}} className='mt-0' >
          <Navbar />
          <div className='ml-10 mt-16'>
          <h1 className=' text-4xl font-bold'>Vehicles</h1>
          <p className='text-lg font-semibold my-3'>Home / Vehicles</p>
          </div>
      </div>

      <div>
        
      <div className='w-[90%] flex flex-col flex-wrap gap-10 mx-auto my-10 justify-center md:flex-row'>
            {carData.map((data) => (
                 <div className='flex flex-col space-y-5  shadow-xl mx-auto w-[350px] h-[50%]'>
                     <img src={data.img} alt={data.name} className='h-56 w-full'/>
                     <div className=' px-auto  flex flex-row justify-around items-center'>
                      <h2 className='text-xl font-semibold'>{data.name}</h2>
                      <p className='text-lg font-bold'>&#8377;{data.price}/day</p>
                     </div>
                     <div className='flex flex-row px-4 justify-between text-slate-500 text-xl font-semibold'>
                       <p>&#128663; {data.model}</p>
                       <p>{data.year}  &#128663;</p>
                     </div>
                     <div className='flex flex-row px-4 pb-5 justify-between text-slate-500 text-xl font-semibold border-b-2'>
                       <p>&#128663; {data.transmission}</p>
                       <p>{data.fuel} &#128663;</p>
                     </div>
                     
                     <div className='w-[90%] pb-5 mx-auto '>
                       <Button text="Book Ride" width="w-full" />
                     </div>
                 </div>

            ))}
        </div>
      </div>

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

export default VehicleModels