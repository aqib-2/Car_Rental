import { googlePlay,appStore, mobile } from "./assets"
const Download = () => {
  return (
    <div className="bg-slate-200 flex flex-row space-between items-center my-10  mx-auto">
        <div className="flex flex-col space-y-8 my-16 w-[90%] mx-auto md:flex-start md:ml-10">
            <h2 className="text-4xl font-bold text-center md:text-left">Download our app to get most out of it</h2>
            <p className="text-slate-500 text-center md:text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus architecto mollitia necessitatibus autem quis accusantium sequi maxime, consequatur asperiores ut voluptatem ex unde nesciunt ea non dolore ullam culpa quae aperiam possimus assumenda enim. Suscipit aperiam unde beatae illum quas.</p>
            <div className="flex flex-col mx-auto md:ml-0 md:flex-row md:space-x-5">
                <img src={googlePlay} alt="play store" className="w-60 h-18 my-3"/>
                <img src={appStore} alt="app store" className="w-60 h-18 my-3"/>
            </div>
         </div>
         <div className="hidden w-[90%] mr-10 md:block">
            <img src={mobile} alt="mobile-image" className="w-fill h-[100%]"/>
         </div>
    </div>
  )
}

export default Download