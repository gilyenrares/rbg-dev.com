import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin
} from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import { FaSquareXTwitter } from 'react-icons/fa6'
import './Footer.css'
const currYear = new Date().getFullYear()

export default function Footer() {
	return (
		<>
		{/* <!-- Footer --> */}
    <footer className="footer">
        <div className="footer-content">
            <div className="footer-links">
                <a href="#">Privacy Policy</a>
                <span className="footer-separator">•</span>
                <a href="#">Terms of Service</a>
                <span className="footer-separator">•</span>
                <a href="#">Documentation</a>
                <span className="footer-separator">•</span>
                <a href="#">Contact Support</a>
            </div>
						<div className="footer-social">
                <Link
            className='text-2xl text-blue-700'
            href='/'
            target='_blank'
            aria-label='Facebook'
          >
            <FaFacebook />
          </Link>
          <Link
            className='text-2xl text-fuchsia-600  '
            href='/'
            target='_blank'
            aria-label='Instagram'
          >
            <FaInstagram />
          </Link>
          <Link
            className='text-2xl text-red-600'
            href={'#'}
            target='_blank'
            aria-label='Youtube'
          >
            <FaYoutube />
          </Link>
          <Link
            className='text-2xl text-white '
            href='/'
            target='_blank'
            aria-label='Twitter'
          >
            <FaSquareXTwitter />
          </Link>
          <Link
            className='text-2xl text-blue-500'
            href='/'
            target='_blank'
            aria-label='LinkedIn'
          >
            <FaLinkedin />
          </Link>
            </div>
            <div className="footer-bottom">
                <p className="footer-credit">&copy; 2019-{currYear} - <a href="#" target="_blank" rel="noopener nofollow">NeoNexus</a> Development. </p>
                <p className="footer-credit">All rights reserved.</p>
            </div>
        </div>
    </footer>
		</>
	);
}