
  import './App.css'
  import AOS from "aos";
import "aos/dist/aos.css";
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Banner from './components/banner/Banner';
import Services from './components/services/Services';
import AppStore from "./components/aapstore/AppStore"
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';

  function App() {
    React.useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 700,
        easing: "ease-in",
        delay: 100,
      });
      AOS.refresh();
    }, []);
  

    return (
    
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
         <Navbar/>
         <Hero/>
         <Services/>
         <Banner/>
         <AppStore/>
         <Testimonials/>
         <Footer/>
      </div>
    )
  }

  export default App
