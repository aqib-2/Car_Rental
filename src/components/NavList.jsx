import { useNavigate } from 'react-router-dom';
const NavList = () => {
    let navigate = useNavigate();
  return (
       <>
            <li className="hover:text-reddish cursor-pointer" onClick={()=> navigate("/")}>Home</li>
            <li className="hover:text-reddish cursor-pointer" onClick={()=> navigate("/about")}>About</li>
            <li className="hover:text-reddish cursor-pointer" onClick={()=> navigate("/vehicles")}>Vehicles</li>
            <li className="hover:text-reddish cursor-pointer" onClick={()=> navigate("/testimonials")}>Testimonials</li>
            <li className="hover:text-reddish cursor-pointer" onClick={()=> navigate("/our-team")}>Team</li>
            <li className="hover:text-reddish cursor-pointer" onClick={()=> navigate("/contact")}>Contact</li>
       </>
  )
}

export default NavList