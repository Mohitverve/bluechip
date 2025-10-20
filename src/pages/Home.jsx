import React from 'react'
import Hero from '../components/Hero'
import ProductSection from '../components/ProductSection'
import WhyChooseUs from '../components/WhyChooseUs'
import WhyCyberPower from '../components/WhyCyberPower'
import Advantages from '../components/Advantages'
import Faqs from '../components/Faqs'

const Home = () => {
  return (
    <div>
      <Hero/>
     
      <WhyChooseUs/>
      <ProductSection/>
      <WhyCyberPower/>
      <Advantages/>
      <Faqs/>
    </div>
  )
}

export default Home
