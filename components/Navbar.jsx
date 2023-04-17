import React, {useState} from 'react'
import Link from 'next/link';
import {IoIosArrowDropupCircle, IoIosArrowDropdownCircle} from 'react-icons/io';
import {FaTwitter, FaInstagram, FaWhatsapp, FaPhoneAlt} from 'react-icons/fa';

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
          <ul className='hidden sm:flex'>
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
          <div onClick={handleNav} className='sm:hidden w-full items-center justify-between'>
            <IoIosArrowDropdownCircle size={35} className='mx-3'/>
          </div>
        </div>
      </div>
      <div className={nav ? 'sm:hidden fixed right-0 left-0 top-0 w-full h-screen bg-black/10' : ''}>
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
            <p className='mt-10 text-center'>Connect with us</p>
            <div className='flex justify-between items-center my-7 w-full'>
                <Link href='/'>
                  <FaInstagram size={50}/>
                </Link>
                <Link href='/'>
                  <FaTwitter size={50}/>
                </Link>
                <Link href='/'>
                  <FaWhatsapp size={50}/>
                </Link>
            </div>
            <div className='flex justify-between items-center my-5 w-full'>
              <Link href='/' className='ml-5'>
                <FaPhoneAlt size={50}/>
              </Link>
              <p className='text-3xl mr-8'>91119 70674</p>
            </div>
            <div className='mx-9 mt-20'>
              <p>&copy; Seaship Tour & Travels</p>
            </div>
            <div className='my-5 mx-5'>
              <Link href='/'>
                <p>Developed by Prateek Dubey</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;