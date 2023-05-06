import { Navbar,Footer } from "./index"
import { bgImage,teamData } from '../assets'
const Team = () => {
  return (
    <>
        <div style={{backgroundImage:`linear-gradient(hsla(0,0%,100%,.92),hsla(0,0%,100%,.92)),url(${bgImage})`,backgroundSize:`cover`,backgroundRepeat:'no-repeat',height:'55vh'}} className='mt-0' >
            <Navbar />
            <div className='ml-10 mt-16'>
            <h1 className=' text-4xl font-bold'>Our Team</h1>
            <p className='text-lg font-semibold my-3'>Home / Team</p>
            </div>
        </div>
        
        <div className='w-[90%] flex flex-col flex-wrap gap-16 mx-auto my-10 justify-center md:flex-row'>
            {teamData.map((data) => (
                 <div className='flex flex-col bg-slate-100 shadow-xl mx-auto w-64 h-[50%]'>
                     <img src={data.img} alt={data.name} className='h-72 w-full'/>
                     <div className='py-5 px-auto text-center bg-white'>
                      <h2 className='text-2xl font-semibold'>{data.name}</h2>
                      <p className='text-lg text-slate-500'>{data.role}</p>
                     </div>
                 </div>

            ))}
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

export default Team