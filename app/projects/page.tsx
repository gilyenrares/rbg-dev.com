import { HeroSection, Jumbotron, Newsletter } from '@/components'
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