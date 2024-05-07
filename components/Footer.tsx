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
import { footerLinks } from '@/constants'

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

        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-center'>
          {footerLinks.map((cat) => (
            <div key={cat.id} className='flex flex-col items-start md: m-4'>
              <h2 className='mb-4 whitespace-nowrap text-white'>{cat.title}</h2>
              {cat.links.map((link) => (
                <Link key={link.title} href={link.url}>{link.title}</Link>
              ))}
            </div>))}
        </div>
      </div>
      <footer className='bg-neutral-800 p-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center items-center border-t-2 border-red-500 '>
        <Link href='/' className='flex text-xl p-3 hover:text-amber-400 text-white text-center'>
          <Image className=' inline-block align-top mr-2' src="/logo.png" alt='RBG Logo' height={20} width={50} />
          RBG-DEV
        </Link>
        <div className=" whitespace-nowrap mx-5 text-center  md:col-span-2 md:order-last lg:col-auto lg:order-none">
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
      </footer>

    </>
  )
}

export default Footer