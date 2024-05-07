"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaList, FaCogs, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdContactMail } from "react-icons/md";
import { BsInfoSquareFill } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import './Navigation.css'
import Button from './Button';

const Navigation = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [modalShow, setModalShow] = React.useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
    // return {
    //   window.removeEventListener('resize', showButton)
    // }
  }, []);
  return (
    <header className="w-full top-0 fixed z-10">
      <nav className='bg-neutral-800 border-b-2 border-red-500 h-20 grid justify-items-center items-center text-xl  navbar--custom'>
        <Link href='/' className='flex text-xl p-3 hover:text-amber-400 text-white'>
          <Image className=' inline-block align-top mr-2' src="/logo.png" alt='RBG Logo' height={20} width={50} />
          RBG-DEV
        </Link>
        <div className="menu-icon p-2" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              href="/"
              className="nav-links hover:text-amber-400"
              onClick={closeMobileMenu}
            >
              <IoHome className='fill-amber-400 mr-1' /> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/about"
              className="nav-links hover:text-amber-400"
              onClick={closeMobileMenu}
            >
              <BsInfoSquareFill className='fill-amber-400 mr-1' /> About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/services"
              className="nav-links hover:text-amber-400"
              onClick={closeMobileMenu}
            >
              <FaCogs className='fill-amber-400 mr-1' />
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/projects"
              className="nav-links hover:text-amber-400"
              onClick={closeMobileMenu}
            >
              <FaList className='fill-amber-400 mr-1' />
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/contact"
              className="nav-links hover:text-amber-400"
              onClick={closeMobileMenu}
            >
              <MdContactMail className='fill-amber-400 mr-1' /> Contact
            </Link>
          </li>
          <li className="nav-btn">
            {button ? (
              <Button
                className="flex items-center"
                buttonStyle="btn--primary "
                buttonSize="btn--small"
                onClick={() => setModalShow(true)}
              >
                <FaUser className='fill-amber-400 mr-2' /> Account
              </Button>
            ) : (
              <Button
                className="flex items-center"
                buttonStyle="btn--primary"
                buttonSize="btn--small"
                onClick={() => setModalShow(true)}
              >
                <FaUser className='fill-amber-400 mr-2' /> Account
              </Button>
            )}
          </li>
        </ul>
        {/* <AccountModal show={modalShow} onHide={() => setModalShow(false)} /> */}
      </nav>
    </header>
  )
}

export default Navigation