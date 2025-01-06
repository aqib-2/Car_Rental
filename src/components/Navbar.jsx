import {useState} from 'react';
import {logo,close,menu} from "../assets";
import Button from './ReusableComponents/Button';
import NavList from './NavList';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate=useNavigate();
  const [toggle, setToggle] = useState(true);
  const handleSignIn = (route) => {
    route && navigate(`/${route}`);
  }
  return (
    
    <nav className="w-full flex py-5 flex-row justify-between items-center">
      
      <div className="flex flex-row flex-shrink-0 mx-2" onClick={()=> navigate("/")}>
        <img src={logo} alt='hoobank' className="w-[85px]"/>
        <p className='mt-3 flex flex-col font-poppins text-black leading-3 font-[600] text-[20px]'><span className='font-[900] text-3xl'>CAR</span>Rental</p>
      </div> 
     

        
      <ul className='hidden items-center space-x-8 font-[600] text-sm lg:flex'>
        <NavList />
      </ul>

      <div className='hidden flex-shrink-0 lg:flex lg:mr-5'>
        <button onClick={() => handleSignIn('login')} className='py-3 px-10 font-semibold text-lg hover:text-reddish'>Sign In</button>
        <Button text="Register" width="px-10" onClickHandler={() => handleSignIn('signup')}/>
      </div>
       

      <div className="lg:hidden">
         <img src={toggle ? menu : close} 
              alt='menu' 
              className="w-[40px] mx-5" 
              onClick={() => setToggle((prev) => !prev)}
         />
         
         <ul className={`absolute ${toggle ? 'hidden' : 'flex'} flex-col items-center py-8 mt-10 space-y-6 font-bold bg-white top-14 left-6 right-6 drop-shadow-md sm:w-auto sm:self-center`}>
            <NavList />
         </ul>
        </div>
       
    </nav>
    
  )
}

export default Navbar