import React from 'react';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import { Home,AboutUs,VehicleModels,Testimonials,Team,ContactUs } from "./components";


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
            </Routes>
          </BrowserRouter>
       </div>
      
  )
}

export default App
