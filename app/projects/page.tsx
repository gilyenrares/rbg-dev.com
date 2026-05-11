import  HeroSection from '@/components/sections/HeroSection';
import Jumbotron from '@/components/sections/Jumbotron';
import Newsletter  from '@/components/sections/Newsletter';
import { projectObjFour, projectObjOne, projectObjThree, projectObjTwo, projects } from '@/constants'
import React from 'react'

const Projects = () => {
  return (
    <>
      <Jumbotron {...projects} />
      <HeroSection {...projectObjOne} />
      <HeroSection {...projectObjTwo} />
      <HeroSection {...projectObjThree} />
      <HeroSection {...projectObjFour} />
      <Newsletter />
    </>
  )
}

export default Projects