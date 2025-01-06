import Button from "../ReusableComponents/Button"
import { carFleetImg,cardDetails } from "./assets"

const Pricing = () => {
  return (
    <div>
        <img src={carFleetImg} alt="cars-Fleet" className="w-[90%] mx-auto"/>
        
        <div className="flex flex-col my-10 mx-auto md:flex-row md:justify-around"> 
            <div className="space-y-5 flex flex-col w-[90%] mx-auto text-center md:text-start md:w-[45%]">
               <h4 className="font-semibold text-2xl">Why Choose Us?</h4>
               <h1 className="font-bold text-5xl">Best valued deals you will ever find</h1>
               <p className="text-slate-500">Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>
                 
            </div>

            <div className="w-[90%] my-5 mx-auto md:my-0 md:w-[45%]">
                {cardDetails.map( (info) => (
                    <div className="flex flex-row items-center my-5">
                      <div className="w-24 h-24 bg-red-100 my-4 rounded-full mx-5">  
                        <img src={info.icon} alt={info.heading} className="w-16 mx-auto mt-3" />
                      </div>
                      <div className="flex flex-col space-y-1 w-[65%]">
                        <h2 className="text-xl font-bold">{info.heading}</h2>
                        <p>{info.para}</p>
                      </div>
                    </div>
                )
                )}
            </div>
        </div>
    </div>
  )
}

export default Pricing