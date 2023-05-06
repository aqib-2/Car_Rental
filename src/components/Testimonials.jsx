import {Navbar,Footer} from "./index"
import { bgImage,quote,kane,sanju } from '../assets'
const Testimonials = () => {
  return (
    <>
        <div style={{backgroundImage:`linear-gradient(hsla(0,0%,100%,.92),hsla(0,0%,100%,.92)),url(${bgImage})`,backgroundSize:`cover`,backgroundRepeat:'no-repeat',height:'55vh'}} className='mt-0' >
            <Navbar />
            <div className='ml-10 mt-16'>
            <h1 className=' text-4xl font-bold'>Testimonials</h1>
            <p className='text-lg font-semibold my-3'>Home / Testimonials</p>
            </div>
        </div>

        <div>
          <div className='my-20 text-center w-[90%] space-y-5 mx-auto  md:w-[50%] '>
            <h4 className='text-xl font-semibold'>Reviewed by People</h4>
            <h1 className='font-bold text-4xl'>Client's Testimonials</h1>
            <p className='text-slate-500'>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
          </div>
          <div className='flex flex-col my-10 md:justify-around md:flex-row'>
            <div className='p-8 my-10 mx-auto text-left space-y-5 shadow-xl shadow-slate-300 bg-slate-200 w-[90%] md:w-[40%]'>
              
              <img src={quote} alt="quotation" className='w-24 h-24 relative left-[75%]'/>

              <p className='text-2xl font-semibold'>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable."</p>
               
              <div className='flex flex-row items-center'>
                <img src={kane} alt="kane" className='w-24 h-24 rounded-full'/>
                <p className='text-2xl font-semibold text-left p-5'>Kane Willamson<br/><span className='text-lg text-slate-500 font-light'>Hyderbad</span></p>
              </div>

               
            </div>
            <div className='p-8 my-10 mx-auto text-left space-y-5 shadow-xl shadow-slate-300 bg-slate-200 w-[90%] md:w-[40%]'>
               
              <img src={quote} alt="quotation" className='w-24 h-24 relative left-[75%]'/>
 
              <p className='text-2xl font-semibold'>"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"</p>

              <div className='flex flex-row items-center '>
                  <img src={sanju} alt='sanju' className='w-24 h-24 rounded-full'/>
                  <p className='text-2xl font-semibold text-left p-5'>Sanju Samson<br/><span className='text-lg text-slate-500 font-light'>Vizag</span></p>
              </div>
              
            </div>
            <div>

            </div>
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

export default Testimonials