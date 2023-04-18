import Image from 'next/image';
import React from 'react';
import ContactImg from '../public/assets/taxi.png';

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen sm:mt-96'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center items-center h-full'>
        <h2 className='font-tilt-prism text-[#0057b7] tracking-widest'>Connect With Us</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2'>Seaship.</h2>
                <p>Tour & Travels Company</p>
                <p className='py-4'>
                At our taxi service, we believe in transparency and fair pricing. Our rates are affordable and upfront, with no hidden fees or surprises. Experience the best in transportation services with our taxi service in Indore.
                </p>
              </div>
              <div>
                
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                action='https://getform.io/f/05bc97ca-b97a-4d8b-8bfd-fd163a1e8f58'
                method='POST'
                encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex '
                      type='text'
                      name='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex '
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full p-4 mt-4 bg-black text-[#FFD854] text-2xl'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;