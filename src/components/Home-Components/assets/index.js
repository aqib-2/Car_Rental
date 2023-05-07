import carIcon from "./car-solid.svg";
import locationIcon from "./location-dot-solid.svg";
import calendarIcon from "./calendar-days-regular.svg";
import car from "./car-fleet.svg";
import chat from "./chat-support.svg";
import drive from "./steering-wheel.svg";
import mahindraxuv from "./Mahindra-xuv-700.jpg";
import harrier from "./Tata-harrier.jpeg";
import endeavour from "./Ford-endeavour.jpg";
import fortuner from "./Fortuner.jpeg";
import creta from "./Hyundai_Creta.jpg";
import ertiga from './Maruti-Ertiga.jpg';
import carFleetImg from "./cars-image.png";
import smartCar from "./smart-car.svg";
import coinHand from "./coin-hand.svg";
import billDollar from "./bill-dollar.svg";
import arrow from "./arrow-down.svg";
import googlePlay from "./google-play.png";
import appStore from "./app-store.png";
import mobile from "./mobile-car-rental.png";

const carModels ={
    xuv : {
      name: "Mahindra XUV 700",
      img: mahindraxuv,
      price: "2800",
      model: "XUV 700",
      brand: "Mahindra",
      year: "2019",
      ac: "yes",
      transmission: "Automatic",
      fuel: "Diesel"
    },
    harrier:{
      name:"Tata Harrier",
      img:harrier,
      price: "2700",
      model: "Harrier",
      brand: "Tata",
      year: "2019",
      ac: "yes",
      transmission: "Manual",
      fuel: "Petrol"
    },
    ford:{
      name:"Ford Endeavour",
      img:endeavour,
      price: "2750",
      model: "Endeavour",
      brand: "Ford",
      year: "2018",
      ac: "yes",
      transmission: "Automatic",
      fuel: "Diesel"
    },
    toyota:{
      name:"Toyota Fortuner",
      img:fortuner,
      price: "2900",
      model: "Fortuner",
      brand: "Toyota",
      year: "2020",
      ac: "yes",
      transmission: "Manual",
      fuel: "Petrol"
    },
    hyundai:{
      name:"Hyundai Creta",
      img:creta,
      price: "2350",
      model: "Creta",
      brand: "Hyundai",
      year: "2022",
      ac: "yes",
      transmission: "Automatic",
      fuel: "Petrol"
    },
    maruti:{
      name:"Maruti Suzuki Ertiga",
      img:ertiga,
      price: "2650",
      model: "Ertiga",
      brand: "Nexa",
      year: "2021",
      ac: "yes",
      transmission: "Manual",
      fuel: "Diesel"
    }

}

const cardDetails = [
    {
      icon: smartCar,
      heading:"Cross Country Drive",
      para:"Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures."
    },
    {
      icon: billDollar,
      heading:"All Inclusive Pricing",
      para:"Get everything you need in one convenient, transparent price with our all-inclusive pricing policy."
    },
    {
      icon: coinHand,
      heading:"No Hidden Charges",
      para:"Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing."
    }
     
  ]

  const questions = [
    {
      question:"1. What is special about comparing rental car deals?",
      answer:"Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies."
    },{
      question:"2. How do I find the car rental deals?",
      answer:"You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions."
    },{
      question:"3. How do I find such low rental car prices?",
      answer:"Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices."
    }
  ];
export {
    carIcon,
    locationIcon,
    calendarIcon,
    car,
    chat,
    drive,
    carModels,
    carFleetImg,
    cardDetails,
    arrow,
    questions,
    googlePlay,
    appStore,
    mobile
}
// model:,
// brand:,
// year:,
// ac:,
// transmission:,
// fuel:,