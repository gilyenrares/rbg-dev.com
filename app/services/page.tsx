import { Cards, HeroSection, Jumbotron, Newsletter } from '@/components'
import { serviceObjFour, serviceObjOne, serviceObjThree, serviceObjTwo, services, servicesCards } from '@/constants'
import React from 'react'

const Services = () => {
  return (
    <>
      <Jumbotron {...services} />
      <HeroSection {...serviceObjOne} />
      <Cards cards={servicesCards} />
      <HeroSection {...serviceObjTwo} />
      <HeroSection {...serviceObjThree} />
      <HeroSection {...serviceObjFour} />
      <Newsletter />
    </>
  )
}

export default Services