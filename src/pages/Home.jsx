import React from 'react'
import Hero from '../components/Hero'
import ProductSection from '../components/ProductSection'
import WhyChooseUs from '../components/WhyChooseUs'
import WhyCyberPower from '../components/WhyCyberPower'
import Advantages from '../components/Advantages'

const Home = () => {
  return (
    <div>
      <Hero/>
     
      <WhyChooseUs/>
      <ProductSection/>
      <WhyCyberPower/>
      <Advantages/>
    </div>
  )
}

export default Home
