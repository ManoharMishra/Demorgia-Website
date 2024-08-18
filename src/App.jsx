import "./App.css";
import { Header } from "./components/Header"
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import {slides} from "./data/SliderData";
import Services from "./components/Services/Services";
import Call from "./components/Call/Call";
import Skills from "./components/Skills/Skills";
import Facts from "./components/Facts/Facts";
import ContactUs from "./components/Contact/ContactUs";
import Portfolio from "./components/Portfolio/Portfolio";
import Testamonials from "./components/Testimonials/Testimonials";
import Partners from "./components/Partners/Partners";
import Aboutup from "./components/AboutUp/Aboutup";
import AboutUs from "./components/About/Aboutus";


function App() {

  return (
    <>
     <div className="container">
      <Header/>
      <Home data={slides}/>
      <Aboutup/>
      <AboutUs/>
      <Services/>
      <Call/>
      <Skills/>
      <Facts/>
      <div className="container1">
        <Portfolio/>
      </div>
      <Partners/>
      <div className="container1">
        <Testamonials/>
        <ContactUs/>
      </div>
      <Footer/>
     </div>
    </>
  )
}

export default App
