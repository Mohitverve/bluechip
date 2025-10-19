import React from 'react'
import Hero from '../components/Hero'
import ProductSection from '../components/ProductSection'
import WhyChooseUs from '../components/WhyChooseUs'
import WhyCyberPower from '../components/WhyCyberPower'

const Home = () => {
  return (
    <div>
      <Hero/>
     
      <WhyChooseUs/>
      <ProductSection/>
      <WhyCyberPower/>
    </div>
  )
}

export default Home
