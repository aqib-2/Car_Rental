import Button from './ReusableComponents/Button'

const Footer = () => {
  return (
    <div className='grid grid-cols-1 gap-5  mx-8 text-justify md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-5'>
        <div> 
           <h2 className='inline-flex font-poppins font-[400] text-2xl'><span className='font-[900]'>CAR</span>Rental</h2>
           <p className='my-5 text-slate-500'>We offers a big range of
            vehicles for all your
            driving needs. We have
            the perfect car to meet
            your needs.</p>
           <p>&#9742; +91 12345 67890 </p>
           <p className='mt-1'>&#9993; car-rental@gmail.com</p>
        </div>

        <div>
            <h2 className='text-2xl font-[800] mb-3'>COMPANY</h2>
            <ul className='space-y-2'>
                <li>Hyderbad</li>
                <li>Careers</li>
                <li>Mobile</li>
                <li>Blog</li>
                <li>How we work</li>
            </ul>
        </div>

        <div>
           <h2 className='text-2xl font-[800] mb-3'>WORKING HOURS</h2>
           <ul className='space-y-2'>
              <li>Mon - Fri: 9:00AM - 9:00PM</li>
              <li>Sat: 9:00AM - 1:00PM</li>
              <li>Sun: Closed</li>
           </ul>
        </div>

        <div className='space-y-4'>
           <h2 className='text-2xl font-[800]'>SUBSCRIPTION</h2>
           <p>Subscribe your Email address for latest news & updates.</p>
           <div className=''>
               <input type='text' className='py-2 w-full bg-slate-200 text-center mb-3' placeholder='Enter Email Address'/>
               <Button text="Submit" width="w-full mb-5" />
           </div>
        </div>
    </div>
  )
}

export default Footer