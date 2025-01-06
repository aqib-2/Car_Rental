import { useState } from 'react'
import { carModels } from './assets'
import Button from '../ReusableComponents/Button'
import { useNavigate } from 'react-router-dom';
const Rental = () => {
  const [carName,setCarName] = useState("xuv");6
  const navigate = useNavigate();
  return ( 
    <div >
        <h3 className='text-center text-2xl font-bold my-5'>Vehicle Models</h3>
        <h1 className='text-center text-5xl font-bold my-5'>Our rental fleet</h1>
        <p className='w-[80%] text-center text-slate-500 mx-auto md:w-[40%]'>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
        <div className='flex flex-col items-center w-[90%] my-20 justify-between mx-auto md:flex-row'>
            <div className='space-y-2 md:w-[20%]'>
                <button className={`w-full py-3 ${ carName=="xuv"     ? 'bg-reddish text-white' : 'bg-slate-200'}`} onClick={() => {setCarName("xuv")}}>{carModels.xuv.name}</button>
                <button className={`w-full py-3 ${ carName=="harrier" ? 'bg-reddish text-white' : 'bg-slate-200'}`} onClick={() => {setCarName("harrier")}}>{carModels.harrier.name}</button>
                <button className={`w-full py-3 ${ carName=="ford"    ? 'bg-reddish text-white' : 'bg-slate-200'}`} onClick={() => {setCarName("ford")}}>{carModels.ford.name}</button>
                <button className={`w-full py-3 ${ carName=="toyota"  ? 'bg-reddish text-white' : 'bg-slate-200'}`} onClick={() => {setCarName("toyota")}}>{carModels.toyota.name}</button>
                <button className={`w-full py-3 ${ carName=="hyundai" ? 'bg-reddish text-white' : 'bg-slate-200'}`} onClick={() => {setCarName("hyundai")}}>{carModels.hyundai.name}</button>
                <button className={`w-full py-3 ${ carName=="maruti"  ? 'bg-reddish text-white' : 'bg-slate-200'}`} onClick={() => {setCarName("maruti")}}>{carModels.maruti.name}</button>
            </div>

            <div className='w-full md:w-[50%]'>
                <img src={carModels[carName].img} alt="car-image" className='w-fill h-64 md:h-96'/>
            </div>

            <div className='md:w-[25%]'>
               <table className='table-fixed w-[90%] text-center mx-auto'>
                <thead>
                  <tr ><td colspan={2}><p className='bg-reddish text-white py-2 w-fill'>&#8377; { carModels[carName].price  } /rent per day </p></td></tr>
                </thead>
                <tbody className='text-center '>
                  <tr><td className='py-2'>Model</td><td className='py-2'>{ carModels[carName].model  }</td></tr>
                  <tr><td className='py-2'>Brand</td><td className='py-2'>{ carModels[carName].brand }</td></tr>
                  <tr><td className='py-2'>Year</td><td className='py-2'>{ carModels[carName].year }</td></tr>
                  <tr><td className='py-2'>AC</td><td className='py-2'>{ carModels[carName].ac }</td></tr>
                  <tr><td className='py-2'>Transmission</td><td className='py-2'>{ carModels[carName].transmission }</td></tr>
                  <tr><td className='py-2'>Fuel Type</td><td className='py-2'>{ carModels[carName].fuel }</td></tr>
                </tbody>
               </table>
               <div className='my-5'>
                  <Button text="RESERVE NOW" width="w-[90%] mx-4" onClickHandler={() => navigate('/dashboard')}/>
               </div>
            </div>
        </div>

        <div className='my-20 bg-gray-800 text-center text-white py-10'>
          <h1 className='text-5xl font-bold py-5'>Save big with our cheap car rental!</h1>
          <h4 className='w-[80%] mx-auto text-2xl font-normal pb-5'>Top Airports. Local Suppliers. <span className='text-reddish'>24/7</span> Support.</h4>
        </div>
    </div>
  )
}

export default Rental