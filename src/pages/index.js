import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import { SliderData } from '../components/HeroSection/SliderData';
import InfoSection from '../components/InfoSection';
import { DataAbout } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Showcase from '../components/Showcase';
import Sidebar from '../components/Sidebar';

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  
  // function to update the state to reverse 
  const toggle = () => {
    setIsOpen(!isOpen)
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection slides={SliderData} />
      <InfoSection {...DataAbout} />
      <Showcase />
    </>
  )
}

export default Home;
