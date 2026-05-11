import Jumbotron from '@/components/sections/Jumbotron';
import Newsletter  from '@/components/sections/Newsletter';
import Card from '@/components/ui/Card';
import HeroSection from '@/components/sections/HeroSection';
import Pricing from '@/components/sections/Pricing';

import { maintenanceCards, serviceObjOne, serviceObjThree, serviceObjTwo, services, servicesCards } from '@/constants'
import React from 'react'

const Services = () => {
  return (
    <>
      <Jumbotron {...services} />
      <HeroSection {...serviceObjOne} />
      <Card cards={servicesCards} />
      <HeroSection {...serviceObjTwo} />
      <Card cards={maintenanceCards} />
      <HeroSection {...serviceObjThree} />
      <Pricing />
      <Newsletter />
    </>
  )
}

export default Services