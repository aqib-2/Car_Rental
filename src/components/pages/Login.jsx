import React from 'react'
import Button from '../ReusableComponents/Button'
import { useDispatch, useSelector } from 'react-redux'
import { setEmail, setEmailError, setPassword, setPassError } from '../../store/slices/loginslice';
import { useLoginUserMutation } from '../../api/endpoints/login';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { setLocalItem } from '../../utils/helperFunctions'
import { toast } from 'react-toastify';
import { gridPattern } from '../../assets';

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginUser]= useLoginUserMutation();

  const {loginEmail,loginPassword,emailError,passError} = useSelector((state) => state.root.login);

  const handleEmailPass = (e) => {
    const {name,value} = e.target;
    if(name === "email"){
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailPattern.test(value)) {
        dispatch(setEmailError(false));
      } else{
        dispatch(setEmailError(true));
      }
      dispatch(setEmail(value));
    }else{
      const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
      if (passwordPattern.test(value)) {
        dispatch(setPassError(false));
      }else{
        dispatch(setPassError(true));
      }
      dispatch(setPassword(value));
    }
  }

  const getBtnDisabled = () => {
    return emailError || passError || loginEmail.trim().length === 0 || loginPassword.trim().length === 0;
  }

  const handleLogin = async () => {
    
    const disabled = getBtnDisabled();
    
    if(!disabled){

      try {
        let payload = {
          email: loginEmail.toLowerCase(),
          password:loginPassword,
        }
        
        const response = await loginUser(payload).unwrap();
        if(response?.statusCode === 200){
          const token = response?.data?.accessToken;
          const refreshToken = response?.data?.refreshToken;
          setLocalItem("refreshToken", refreshToken);
          setLocalItem("token", token);
          if(token){
            const decoded = jwtDecode(token);
            setLocalItem("userName", decoded?.name);
            setLocalItem("userRole", decoded?.role ?? null);
            setLocalItem("userEmail", decoded?.email);
            if (decoded.role) {
              decoded.role === "admin"
                ? navigate("/admindashboard")
                : navigate("/dashboard");
            }
          }
        }
      } catch (error) {
        toast.error(error?.data?.message ?? "Oops! Something went wrong. Please try again later.");
        console.error(error);
      }
    }
  }

  return (
    <>
      <div>
        <div className="flex font-poppins flex-col h-screen items-center justify-center px-6 py-8 mx-auto lg:py-0" style={{backgroundImage: `url(${gridPattern})`}}>
          <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <p className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Login to your account
              </p>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Your Email
                </label>
                <input placeholder="Enter your Email" value={loginEmail} onChange={(e) => handleEmailPass(e)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" name="email" type="text" />
                <p className={`text-[10px] text-red-500 ${emailError ? 'visible' : 'invisible'}`}>Please enter valid email address</p>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <input value={loginPassword} onChange={(e) => handleEmailPass(e)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="••••••••" name="password" type="password" />
                <p className={`text-[10px] text-red-500 ${passError ? 'visible' : 'invisible'}`}>Enter a password with at least 8 chars, 1 uppercase, 1 number, and 1 symbol.</p>
              </div>

              <Button text="Login" width="w-full" disabled={getBtnDisabled()} onClickHandler={handleLogin} />
              
              <p className='text-center text-sm'>Don't have an account yet? <button onClick={() => navigate('/signup')} className='text-reddish underline'>Sign up now</button></p>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Login