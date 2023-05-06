import {Navbar,Footer} from "./index";
import { Booking,Download,Faq,Hero,Pricing,Selection,Rental } from "./Home-Components/index"

const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Booking />
    <Selection />
    <Rental />
    <Pricing />
    <Faq />
    <Download />
    <Footer />
    </>
  )
}

export default Home