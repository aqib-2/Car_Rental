import {car,chat,drive} from "./assets";
const Selection = () => {
  return (
    <div className='w-[90%] mx-auto my-14'>
        <h3 className='text-center text-2xl font-bold my-5'>Plan your trip now</h3>
        <h1 className='text-center text-5xl font-bold my-5'>Quick & easy car rental</h1>
        <div className='flex flex-col justify-between my-12 md:flex-row'>
            <div className='flex flex-col items-center space-y-5 my-5 mx-auto md:space-y-2 md:gap-5'>
                <div className='bg-red-100 w-28 h-20 curvy-edges'>
                   <img src={car} className='w-[60px] mx-auto mt-2'/>
                </div>
                <h3 className='font-bold text-xl'>Select Car</h3>
                <p className='w-[70%] text-center text-slate-500'>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
            </div>
               
            <div className='flex flex-col items-center space-y-5 my-5 mx-auto md:space-y-2 md:gap-5'>
                <div className='bg-red-100 w-28 h-20 curvy-edges'>
                   <img src={chat} className='w-[60px] mx-auto mt-2'/>
                </div>
                <h3 className='font-bold text-xl'>Contact Operator</h3>
                <p className='w-[70%] text-center text-slate-500'>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
            </div>

            <div className='flex flex-col items-center space-y-5 my-5 mx-auto md:space-y-2 md:gap-5'>
                <div className='bg-red-100 w-28 h-20 curvy-edges '>
                   <img src={drive} className='w-[60px] mx-auto mt-2'/>
                </div>
                <h3 className='font-bold text-xl'>Let's Drive</h3>
                <p className='w-[70%] text-center text-slate-500'>Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
            </div>
        </div>
    </div>
  )
}

export default Selection