import React from 'react'
import "./Footer.css"
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin
} from 'react-icons/fa'
import Button from './Button'
import Link from 'next/link'
import Image from 'next/image'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
      <div className='top-slope'></div>
      <div className='footer-container'>
        <div className='footer-subscription col-span-12'>
          <p className='footer-subscription-heading'>
            Join our exclusive membership to receive the latest news and trends
          </p>
          <p className='footer-subscription-text'>
            You can unsubscribe at any time.
          </p>
          <div className='input-areas'>
            <form>
              <input
                className='footer-input'
                name='email'
                type='email'
                placeholder='Your Email'
              />
              <Button buttonStyle='btn--outline'>Subscribe</Button>
            </form>
          </div>
        </div>
        <div className='footer-links row-span-12'>
          <div className='footer-link-items d-flex align-items-center'>
            <h2>About Us</h2>
            <Link href='/sign-up'>How it works</Link>
            <Link href='/'>Testimonials</Link>
            <Link href='/'>Careers</Link>
            <Link href='/'>Investors</Link>
            <Link href='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items d-flex align-items-center'>
            <h2>Contact Us</h2>
            <Link href='/'>Contact</Link>
            <Link href='/'>Support</Link>
            <Link href='/'>Destinations</Link>
            <Link href='/'>Sponsorships</Link>
          </div>
          <div className='footer-link-items d-flex align-items-center'>
            <h2>Videos</h2>
            <Link href='/'>Submit Video</Link>
            <Link href='/'>Ambassadors</Link>
            <Link href='/'>Agency</Link>
            <Link href='/'>Influencer</Link>
          </div>
          <div className='footer-link-items d-flex align-items-center'>
            <h2>Social Media</h2>
            <Link href='/'>Instagram</Link>
            <Link href='/'>Facebook</Link>
            <Link href='/'>Youtube</Link>
            <Link href='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <div className='footer row m-0 d-flex align-items-center'>
        <Link href='/' className='flex text-xl p-3 hover:text-amber-400 text-white'>
          <Image className=' inline-block align-top mr-2' src="/logo.png" alt='RBG Logo' height={20} width={50} />
          RBG-DEV
        </Link>
        <div className="copyright mx-5 text-center flex">
          Copyright ©
          <Image className='inline-flex self-center mx-1' src="/logo.png" alt='RBG Logo' height={18} width={28} />RBG-Development 2019 - 2024
        </div>
        <div className='social-icons col mx-5'>
          <Link
            className='text-2xl text-white hover:text-blue-700'
            href='/'
            target='_blank'
            aria-label='Facebook'
          >
            <FaFacebook />
          </Link>
          <Link
            className='text-2xl text-white hover:text-fuchsia-600  '
            href='/'
            target='_blank'
            aria-label='Instagram'
          >
            <FaInstagram />
          </Link>
          <Link
            className='text-2xl text-white hover:text-red-600'
            href={
              '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
            }
            target='_blank'
            aria-label='Youtube'
          >
            <FaYoutube />
          </Link>
          <Link
            className='text-2xl text-white hover:text-black '
            href='/'
            target='_blank'
            aria-label='Twitter'
          >
            <FaSquareXTwitter />
          </Link>
          <Link
            className='text-2xl text-white hover:text-blue-500'
            href='/'
            target='_blank'
            aria-label='LinkedIn'
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Footer