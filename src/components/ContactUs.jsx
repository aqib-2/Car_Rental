import {Navbar,Footer} from "./index"
import { bgImage, world } from '../assets'
import Button from './Button'

const ContactUs = () => {
  return (
    <>
        <div style={{backgroundImage:`linear-gradient(hsla(0,0%,100%,.92),hsla(0,0%,100%,.92)),url(${bgImage})`,backgroundSize:`cover`,backgroundRepeat:'no-repeat',height:'55vh'}} className='mt-0' >
            <Navbar />
            <div className='ml-10 mt-16'>
            <h1 className=' text-4xl font-bold'>Contact Us</h1>
            <p className='text-lg font-semibold my-3'>Home / Contact us</p>
            </div>
        </div>

        <div style={{backgroundImage:`url(${world})`,backgroundPosition:'center'}} className='flex flex-col items-center md:justify-around my-10 py-5 md:flex-row'>
          <div className='space-y-5 mx-auto w-[90%] md:w-[40%]'>
            <h1 className='text-4xl font-bold'>Need additional information?</h1>
            <p className='text-slate-500'>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
            <p>&#9742; +91 12345 67890 </p>
            <p>&#9993; car-rental@gmail.com</p>
          </div>
          <form className='w-[90%] mx-auto my-10 md:w-[40%]'>
            <label>
              <p>Your Name <span className='text-reddish'>*</span></p>
              <input type='text' placeholder='Eg:"Mo Aqib"' className='py-3 px-5 w-full mt-2 mb-5 bg-slate-200'/>
            </label>
            <label>
              <p>Email <span className='text-reddish'>*</span></p>
              <input type='text' placeholder='youremail@example.com' className='py-3 px-5 w-full mt-2 mb-5 bg-slate-200'/>
            </label>
            <label>
              <p>Tell us about it <span className='text-reddish'>*</span></p>
              <textarea placeholder='Write here...' className='py-3 px-5 w-full h-40 mt-2 mb-5 bg-slate-200'/>
            </label>
            <label>
              <Button text="Send Message" width="w-full" />
            </label>
          </form>
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

export default ContactUs