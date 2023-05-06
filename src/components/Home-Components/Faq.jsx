import { useState } from "react"
import { arrow,questions } from "./assets"
const Faq = () => {
  return (
    <div>
        <h1 className="text-4xl md:text-5xl font-bold text-center my-3">Frequently Asked Questions</h1>
        <p className="w-[80%] text-center text-md text-slate-500 mx-auto md:w-[45%]">Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.</p>
     
        <div className="w-[90%] mx-auto my-8 shadow-md shadow-slate-500 md:w-[60%]">
            {questions.map ( (obj) => (
                <Quest question={obj.question} answer={obj.answer} / >
            ))}  
        </div>
    </div>
  )
}
 
const Quest= ({question,answer}) =>{
    const [show,setShow] = useState(false)
    return (
        <div>
            <div className={`flex justify-between items-center px-5 ${show ? 'text-white bg-reddish': 'text-black'} `} onClick={() => setShow((prev) => !prev)}>
                <h3 className="text-xl font-semibold py-5 ">{question}</h3>
                <p className={`${show ? 'hidden': 'block'} text-xl`}>&#43;</p>
                <p className={`${show ? 'block': 'hidden'} text-xl`}>&#8722;</p>
            </div>
            <div >
                { show && <p className="text-slate-500 p-10 border-b-2 border-black">{answer}</p> }
            </div>
        </div>
    )
}
export default Faq