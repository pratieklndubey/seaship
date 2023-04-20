import React from 'react'
import Image from 'next/image'
import amaze from '../public/assets/amaze.png'
import innova from '../public/assets/innova.png'
import dzire from '../public/assets/dzire.png'
import audi from '../public/assets/audi.png'
import merc from '../public/assets/merc.png'
import city from '../public/assets/city.png'
import crysta from '../public/assets/crysta.png'
import bmw from '../public/assets/bmw.png'
import fort from '../public/assets/fort.png'
import etios from '../public/assets/etios.png'

function Cars() {
  return (
    <div id='cars' className='w-full md:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center items-center h-full'>
            <h2 className='font-tilt-prism text-[#0057b7] tracking-widest'>Our Car Fleet</h2>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-8 mt-10'>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-1 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={amaze} width='256px' height='256px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <p>Honda Amaze</p>
                            <p>₹10.90/Km</p>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-1 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={dzire} width='256px' height='256px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <p>Suzuki Dzire</p>
                            <p>₹10.90/Km</p>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-1 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={etios} width='256px' height='256px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <p>Toyota Etios</p>
                            <p>₹10.90/Km</p>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-1 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={innova} width='256px' height='256px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <p>Toyota Innova</p>
                            <p>₹13.99/Km</p>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-1 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={audi} width='256px' height='256px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <p>Audi Q7</p>
                            <p>₹59.99/Km</p>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-1 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={merc} width='256px' height='256px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <p>Mercedes C 320</p>
                            <p>₹59.99/Km</p>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-1 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={bmw} width='256px' height='256px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <p>BMW 320D</p>
                            <p>₹59.99/Km</p>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-1 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={city} width='256px' height='256px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <p>Honda City</p>
                            <p>₹13.99/Km</p>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-1 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={crysta} width='256px' height='256px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <p>Toyota Crysta</p>
                            <p>₹15.99/Km</p>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-1 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={fort} width='256px' height='256px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <p>Toyota Fortuner</p>
                            <p>₹39.99/Km</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cars;