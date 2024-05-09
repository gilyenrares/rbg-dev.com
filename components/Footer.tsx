import React from 'react'
import "./Footer.css"
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin
} from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
      <footer className='bg-neutral-800 p-10 grid grid-cols-1 md:grid-cols-6 gap-10 justify-items-center items-center mx-auto border-t-2 border-red-500 '>
        <Link href='/' className='flex md:col-span-2 text-xl p-3 hover:text-amber-400 text-white text-center'>
          <Image className=' inline-block align-top mr-2' src="/logo.png" alt='RBG Logo' height={20} width={50} />
          RBG-DEV
        </Link>
        <div className=" mx-5 text-center md:col-span-2 text-white">
          <div className=' whitespace-nowrap'>Copyright ©</div>
          <Image className='inline-flex self-center mx-1' src="/logo.png" alt='RBG Logo' height={18} width={28} /><div className=' whitespace-nowrap'>RBG-Development 2019-2024</div>
        </div>
        <div className='social-icons md:col-span-2 col mx-5'>
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