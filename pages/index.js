import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Plans from '@/components/Plans'
import Cars from '@/components/Cars'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Seaship Tour & Travels</title>      
        <meta name="subject" content="Seaship Tour & Travels"/>
        <meta name="description" content="Tour & Travels Agency In Indore, Madhya Pradesh"/>
        <meta name="classification" content="Tour & Travels"/>
        <meta name="language" content="English"/>
        <meta name="designer" content="Prateek Dubey"/>
        <link rel='icon' href='/assets/taxi.png'/>
      </Head>
      <Navbar/>
      <Hero/>
      <Cars />
      <Plans />
      <Contact />
      <Footer />
    </div>
  )
}
