import React from 'react';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import { Home,AboutUs,VehicleModels,Testimonials,Team,ContactUs } from "./components";
import ProtectedRoute from './utils/ProtectedRoute';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import NotFoundPage from './components/pages/NotFoundpage';
import UserDashboard from './components/pages/dashoards/user/UserDashboard';
import AdminDashboard from './components/pages/dashoards/admin/AdminDashboard';
import ReusableDialog from './components/dialogComponents/ReusableDialog';
import MyBookings from './components/pages/dashoards/user/MyBookings';


function App() {

  return (
    <div>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/about' element={<AboutUs />}/>
              <Route path='/vehicles' element={<VehicleModels />}/>
              <Route path='/testimonials' element={<Testimonials />}/>
              <Route path='/our-team' element={<Team />}/>
              <Route path='/contact' element={<ContactUs />}/> 
              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<SignUp/>}/>
              <Route element={<ProtectedRoute/>}>
                <Route path='/dashboard' element={<UserDashboard/>}/>
                <Route path='/bookings' element={<MyBookings/>}/>
                <Route path='/admindashboard' element={<AdminDashboard/>}/>
              </Route>
              <Route path='/error' element={<NotFoundPage/>}/>
            </Routes>
          </BrowserRouter>
          <ReusableDialog />
       </div>
      
  )
}

export default App
