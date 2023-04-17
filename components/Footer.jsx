import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div className='bg-black justify-center items-center w-full h-20 sm:h-40 flex flex-col'>
        <p className='text-[#FFD854] sm:text-4xl'>&copy; Seaship Pvt. Ltd.</p>
        <p className='text-[#FFD854] sm:text-4xl'>Developed By <Link href='https://pratiekdubey.github.io/' target='_blank'>Prateek Dubey</Link></p>
    </div>
  )
}

export default Footer