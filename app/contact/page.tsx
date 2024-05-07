import { HeroSection, Jumbotron } from '@/components'
import { contact, contactObjOne, contactObjTwo } from '@/constants'
import React from 'react'

const Contact = () => {
  return (
    <>
      <Jumbotron {...contact} />
      <HeroSection {...contactObjOne} />
      {/* <ContactForm /> */}
      <HeroSection {...contactObjTwo} />

    </>
  )
}

export default Contact