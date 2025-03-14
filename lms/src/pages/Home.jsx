import React from 'react'
import '../Components/Home.css'
import Header from '../Components/Header'
import CardSection from '../Components/CardSection'
import Testimonials from '../Components/Testimonials'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import "./Home.css"

const Home = () => {
  return (
    <>
    <div id='home'>
    {/* <Nav ></Nav> */}
    {/* <Head1/> */}
        <Navbar />
        <Header />
        <CardSection />
        <Testimonials />
        <Footer />
    </div>
    </>
  )
}

export default Home
