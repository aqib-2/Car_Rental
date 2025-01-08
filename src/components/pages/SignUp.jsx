import React from 'react'
import Button from '../ReusableComponents/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setConfirmPassword, setEmail, setEmailError, setName, setPassword, setPasswordError, setSamePasswordError } from '../../store/slices/signUpSlice';
import { useRegisterMutation } from '../../api/endpoints/login';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { gridPattern } from '../../assets';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register] = useRegisterMutation();

  const {name,email,password,confirmPassword,emailFormatError,passwordError,samePassword} = useSelector((state) => state.root.signUp);

  const handleChange = (e) => {
   const {name,value} = e.target;
   if(name === 'username'){
    dispatch(setName(value));
   }else if(name === 'email'){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailPattern.test(value)) {  
        dispatch(setEmailError(false));
      } else{
        dispatch(setEmailError(true));
      }
    dispatch(setEmail(value));
   }else if(name === 'password'){
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
      if (passwordPattern.test(value)) {
        dispatch(setPasswordError(false));
      }else{
        dispatch(setPasswordError(true));
      }
    dispatch(setPassword(value));
   }else if(name === "confirmPassword"){
    if(password !== value){
      dispatch(setSamePasswordError(true));
    }else{
      dispatch(setSamePasswordError(false));
    }
    dispatch(setConfirmPassword(value));
   }
  }

  const handleSignUp = async() => {
    const disabled = getBtnDisabled();
    if(!disabled){
      try{
       let payload = {
        name,
        email : email.toLowerCase(),
        password
       }
       const response = await register(payload).unwrap();
       if(response?.statusCode === 201){
        toast.success('Registered successfully');
        toast.info('Please login into your account')
        navigate('/login');
       }
      }catch(e){
        console.error(e);
      }
    }
  }

  const getBtnDisabled = () => {
    return name.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '' || emailFormatError || passwordError || samePassword
  }

  return (
      <div className="flex flex-col h-screen items-center justify-center px-6 py-8 mx-auto lg:py-0" style={{backgroundImage: `url(${gridPattern})`}}>
        <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create an account
            </p>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Your Name
              </label>
              <input placeholder="Enter your Name" value={name} onChange={(e) => handleChange(e)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" name="username" type="text" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Your Email
              </label>
              <input placeholder="Enter your Email" value={email} onChange={(e) => handleChange(e)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" name="email" type="text" />
              <p className={`text-[10px] text-red-500 ${emailFormatError ? 'visible' : 'invisible'}`}>Please enter valid email address</p>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Password
              </label>
              <input value={password} onChange={(e) => handleChange(e)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="••••••••" name="password" type="password" />
              <p className={`text-[10px] text-red-500 ${passwordError ? 'visible' : 'invisible'}`}>Enter a password with at least 8 chars, 1 uppercase, 1 number, and 1 symbol.</p>            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Confirm password
              </label>
              <input value={confirmPassword} onChange={(e) => handleChange(e)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="••••••••" name="confirmPassword" type="password" />
              <p className={`text-[10px] text-red-500 ${samePassword ? 'visible' : 'invisible'}`}>The passwords you entered do not match.</p>
            </div>

            <Button text="Sign Up" width="w-full" disabled={getBtnDisabled()} onClickHandler={handleSignUp}/>
            
            <p className='text-center text-sm'>Already a user? Please <button onClick={() => navigate('/login')} className='text-reddish underline'>login</button></p>
          </div>
        </div>
      </div>
  )
}

export default SignUp;