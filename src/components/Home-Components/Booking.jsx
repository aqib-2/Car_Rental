import { carIcon,calendarIcon,locationIcon } from "./assets";
import Button from "../Button";

const Booking = () => {
  return (
    <div id="booking" className="w-[90%] py-5 mx-auto outline-none drop-shadow-md rounded">
        <h2 className='mx-16 text-2xl font-semibold'>Book a car</h2>
        <form className="w-[90%] py-5 grid grid-cols-1 mx-auto gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex flex-row font-semibold py-2 my-1 "><img src={carIcon} alt="car-icon" className="w-[14px] fill-reddish"/>
            &nbsp;Select Your Car Type <span className="text-reddish">*</span></div>
            <select className="p-3 w-full text-slate-500">
              <option>Select your car type</option>
              <option>Mahindra XUV 700</option>
              <option>Tata Harrier</option>
              <option>Ford Endeavour</option>
              <option>Toyota Fortuner</option>
              <option>Hyundai Creta</option>
              <option>Maruti Suzuki Ertiga</option>
            </select>
          </div>

          <div>
            <div className="flex flex-row font-semibold py-2 my-1"><img src={locationIcon} alt="car-icon" className="w-[13px]"/>&nbsp;Pick-up <span className="text-reddish">*</span></div>
            <select className="p-3 w-full text-slate-500">
              <option>Select pick up location</option>
              <option>Hyderabad</option>
              <option>Vijayawada</option>
              <option>Warangal</option>
              <option>Vizag</option>
              <option>Nellore</option>
            </select>
          </div>

          <div>
            <div className="flex flex-row font-semibold py-2 my-1"><img src={locationIcon} alt="car-icon" className="w-[13px]"/>&nbsp;Drop-off <span className="text-reddish">*</span></div>
            <select className="p-3 w-full text-slate-500">
              <option>Select drop off location</option>
              <option>Hyderabad</option>
              <option>Vijayawada</option>
              <option>Warangal</option>
              <option>Vizag</option>
              <option>Nellore</option>
            </select>
          </div>

          <div>
            <div className="flex flex-row font-semibold py-2 my-1"><img src={calendarIcon} alt="car-icon" className="w-[13px]"/>&nbsp;Pick-up <span className="text-reddish">*</span></div>
            <input type="date" className="p-3 w-full bg-gray-200 uppercase text-slate-500"/>
          </div>

          <div>
            <div className="flex flex-row font-semibold py-2 my-1"><img src={calendarIcon} alt="car-icon" className="w-[13px]"/>&nbsp;Drop-off <span className="text-reddish">*</span></div>
            <input type="date" className="p-3 w-full bg-gray-200 uppercase text-slate-500"/>
          </div>

          <div className="mt-12">
            <Button text="Search" width="w-full"/>
          </div>
        </form>
    </div>
  )
}

export default Booking