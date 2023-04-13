import React, {useState} from 'react'
import Link from 'next/link';
import {IoIosArrowDropupCircle, IoIosArrowDropdownCircle} from 'react-icons/io';
import {FaTwitter, FaInstagram, FaWhatsapp} from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  }
  return (
    <div className='fixed w-full h-20 z-[100]'>
      <div className='flex justify-between items-center w-full h-full pt-7 px-7 2xl:px-16'>
        <h2 className='ml-3'>Seaship.</h2>
        <div>
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 uppercase hover:border-b border-black'>Packages</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 uppercase hover:border-b border-black'>Cars</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 uppercase hover:border-b border-black'>Contact</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 uppercase hover:border-b border-black'>About</li>
            </Link>
          </ul>
          <div onClick={handleNav} className='md:hidden'>
            <IoIosArrowDropdownCircle size={35} className='mr-3'/>
          </div>
        </div>
      </div>
      <div className={nav ? 'fixed right-0 left-0 top-0 w-full h-screen bg-black/10' : ''}>
        <div className={nav ? 'fixed right-0 left-0 top-0 w-[100%] sm:w-[45%] h-screen bg-[#FFD854] p-10 ease-in duration-500': 'fixed top-[-100%] left-0 right-0 p-10 ease-in duration-300'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <h2>Seaship.</h2>
              <div onClick={handleNav}>
                <IoIosArrowDropupCircle size={35}/>
              </div>
            </div>
            <div className='border-black border-b-2'>
              <p>Hum Car Chalaate Kalakaar Hain!</p>
            </div>
          </div>
          <div className='flex-col mt-5 uppercase'>
            <ul>
              <Link href='/'>
                <li className='py-2 text-2xl text-center'>Packages</li>
              </Link>
              <Link href='/'>
                <li className='py-2 text-2xl text-center'>Cars</li>
              </Link>
              <Link href='/'>
                <li className='py-2 text-2xl text-center'>Contact</li>
              </Link>
              <Link href='/'>
                <li className='py-2 text-2xl text-center'>About</li>
              </Link>
            </ul>
            <p className='mt-20 text-center'>Connect with us</p>
            <div className='flex justify-between items-center my-7 w-full'>
                <FaInstagram size={50}/>
                <FaTwitter size={50}/>
                <FaWhatsapp size={50}/>
            </div>
          </div>
          <div className='mt-40 flex justify-between items-center w-full text-xs'>
            <p>&copy; Seaship Pvt. Ltd.</p>
            <p>Developed by Prateek Dubey</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;