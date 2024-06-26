import { Cards, HeroSection, Jumbotron, Newsletter } from '@/components'
import { maintenanceCards, serviceObjOne, serviceObjThree, serviceObjTwo, services, servicesCards } from '@/constants'
import React from 'react'

const Services = () => {
  return (
    <>
      <Jumbotron {...services} />
      <HeroSection {...serviceObjOne} />
      <Cards cards={servicesCards} />
      <HeroSection {...serviceObjTwo} />
      <Cards cards={maintenanceCards} />
      <HeroSection {...serviceObjThree} />
      <Newsletter />
    </>
  )
}

export default Services