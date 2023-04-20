import React from 'react'
import Image from 'next/image'
import indore from '../public/assets/indore.jpg'
import ujjain from '../public/assets/ujjain.jpg'
import mandu from '../public/assets/mandu.jpg'
import maheshwar from '../public/assets/maheshwar.jpg'
import omkareshwar from '../public/assets/omkareshwar.jpg'
import pithampur from '../public/assets/pithampur.jpg'

function Plans() {
  return (
    <div id='plans' className='w-full md:h-screen p-2 my-48'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center items-center h-full'>
            <h2 className='font-tilt-prism text-[#0057b7] tracking-widest'>Curated Packages</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-10'>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-1 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={indore} width='256px' height='256px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center mt-5'>
                            <p>Indore Local Tour In Sedan @ ₹1599/-</p>
                            <p>Indore Local Tour In MPV @ ₹2399/-</p>
                            <p>Indore Local Tour In Crysta @ ₹2699/-</p>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-1 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={ujjain} width='256px' height='256px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center mt-5'>
                            <p>Ujjain Darshan In Sedan @ ₹2499/-</p>
                            <p>Ujjain Darshan In MPV @ ₹3299/-</p>
                            <p>Ujjain Darshan In Crysta @ ₹3799/-</p>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-1 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={maheshwar} width='256px' height='256px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center mt-5'>
                            <p>Maheshwar Darshan In Sedan @ ₹2699/-</p>
                            <p>Maheshwar Darshan In MPV @ ₹3599/-</p>
                            <p>Maheshwar Darshan In Crysta @ ₹4099/-</p>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-1 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={mandu} width='256px' height='256px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center mt-5'>
                            <p>Mandu Tour In Sedan @ ₹2699/-</p>
                            <p>Mandu Tour In MPV @ ₹3599/-</p>
                            <p>Mandu Tour In Crysta @ ₹4099/-</p>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-1 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={omkareshwar} width='256px' height='256px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center mt-5'>
                            <p>Omkareshwar Darshan In Sedan @ ₹2699/-</p>
                            <p>Omkareshwar Darshan In MPV @ ₹3599/-</p>
                            <p>Omkareshwar Darshan In Crysta @ ₹4099/-</p>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-1 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={pithampur} width='256px' height='256px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center mt-5'>
                            <p>Indore To Pithampur In Sedan @ ₹2199/-</p>
                            <p>Indore To Pithampur In MPV @ ₹2999/-</p>
                            <p>Indore To Pithampur In Crysta @ ₹3499/-</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Plans;