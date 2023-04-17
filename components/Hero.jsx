import React from 'react'
import Image from 'next/image'
import taxi from '../public/assets/taxi.png'
import Typed from 'react-typed'

function Hero() {
  return (
    <div className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <Image
            src={taxi}
            width={100}
            height={100}
            alt='logo'
            className='mx-[33%] sm:mx-[45%]'
          />
          <h4 className='sm:text-2xl text-lg'>Trust Us When We Say</h4>
          <h3 className='sm:text-4xl text-xl text-[#0057b7] font-tilt-prism'>Hum Car Chalate Kalakaar Hain!</h3>
          <div>
            <p className='sm:text-3xl text-lg mt-5 font-itim'>
              Let's Ride From Indore To <Typed strings={['Ujjain!', 'Maheshwar!', 'Pithampur!', 'Mandu!', 'Omkareshwar!', 'Mandav!']} typeSpeed={40} backSpeed={30} loop/>
            </p>
          </div>
          <p className='my-5 font-itim sm:text-2xl text-xl mt-10 sm:mt-5'>
            Let us take the hassle out of your travel plans and provide you with a comfortable and stress-free ride.<br/>
            Discover the difference by booking with us today.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero