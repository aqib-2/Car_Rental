import React, { useEffect, useRef, useState } from 'react'
import {logo,close,menu} from "../../../../assets";
import { useNavigate } from 'react-router-dom';
import { ProfileIcon } from '../../../../assets';
import { setMainScreen } from '../../../../store/slices/adminSlice';
import { useDispatch } from 'react-redux';
import { useLogoutUserMutation } from '../../../../api/endpoints/login';
import { clearLocalStorage } from '../../../../utils/helperFunctions';

const AdminHeader = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [toggleDropdown, setToggleDropdown] = useState();
    const dropdownRef = useRef(null);
  
    const [logoutUser] = useLogoutUserMutation();
  
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setToggleDropdown(false);
      }
    };
  
    const handleLogout = async () => {
      await logoutUser();
      clearLocalStorage();
      navigate("/login");
    };

    const handleScreen = (screen) => {
      screen && dispatch(setMainScreen(screen));
    }
  
    useEffect(() => {
      if (toggleDropdown) {
        document.addEventListener("mousedown", handleOutsideClick);
      } else {
        document.removeEventListener("mousedown", handleOutsideClick);
      }
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }, [toggleDropdown]);

    return (
        <nav className="w-full flex py-5 flex-row justify-between items-center">
          
          <div className="flex flex-row flex-shrink-0 mx-2 cursor-pointer" onClick={()=> navigate("/")}>
            <img src={logo} alt='car-rental' className="w-[85px]"/>
            <p className='mt-3 flex flex-col font-poppins text-black leading-3 font-[600] text-[20px]'><span className='font-[900] text-3xl'>CAR</span>Rental</p>
          </div> 
         
    
          <div className='flex space-x-8 mr-8'>
            <ul className='hidden items-center space-x-8 font-[600] text-md lg:flex'>
                <li className="hover:text-reddish cursor-pointer" onClick={() => handleScreen("dahboard")}>Dashboard</li>
                <li className="hover:text-reddish cursor-pointer" onClick={() => handleScreen("lookups")}>lookups</li>
                <li className="hover:text-reddish cursor-pointer" onClick={() => handleScreen("bookings")}>Bookings</li>
            </ul>

            <button
          className="relative flex items-center"
          onClick={() => setToggleDropdown((prev) => !prev)}
          aria-label="Profile options"
        >
          <img src={ProfileIcon} alt="profile-icon" className="w-12 h-12" />
          {toggleDropdown && (
            <div
              ref={dropdownRef}
              className="absolute top-full right-0 mt-2 border rounded-xl bg-white shadow-lg z-10"
            >
              <button
                className="block w-full p-2 text-left text-reddish hover:bg-reddish hover:text-white rounded-xl"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </button>
          </div>
           
        </nav>
        
      )
}

export default AdminHeader