import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

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
    </div>
  )
}
