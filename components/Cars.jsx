import React from 'react'
import Image from 'next/image'
import amaze from '../public/assets/amaze.png'
import innova from '../public/assets/innova.png'
import dzire from '../public/assets/dzire.png'
import etios from '../public/assets/etios.png'

function Cars() {
  return (
    <div id='cars' className='w-full md:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center items-center h-full'>
            <h2 className='font-tilt-prism text-[#0057b7] tracking-widest'>Our Car Fleet</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-10'>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-1 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={amaze} width='256px' height='256px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Honda Amaze</h3>
                            <h3>5 Seater</h3>
                            <h3>Sedan</h3>
                            <h3>₹10.90/Km</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-1 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={dzire} width='256px' height='256px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Suzuki Dzire</h3>
                            <h3>5 Seater</h3>
                            <h3>Sedan</h3>
                            <h3>₹10.90/Km</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-1 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={etios} width='256px' height='256px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Toyota Etios</h3>
                            <h3>5 Seater</h3>
                            <h3>Sedan</h3>
                            <h3>₹10.90/Km</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-1 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={innova} width='256px' height='256px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Toyota Innova</h3>
                            <h3>7 Seater</h3>
                            <h3>MPV</h3>
                            <h3>₹13.99/Km</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cars