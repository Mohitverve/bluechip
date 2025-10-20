import React, { lazy, Suspense } from 'react';
import Hero from '../components/Hero';

// Lazy load components below the fold
const WhyChooseUs = lazy(() => import('../components/WhyChooseUs'));
const ProductSection = lazy(() => import('../components/ProductSection'));
const WhyCyberPower = lazy(() => import('../components/WhyCyberPower'));
const Advantages = lazy(() => import('../components/Advantages'));
const Faqs = lazy(() => import('../components/Faqs'));
const PartnerEnquiry = lazy(() => import('../components/PartnerEnquiry'));

const Home = () => {
  return (
    <div>
      <Hero />
      
      <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
        <WhyChooseUs />
      </Suspense>
      
      <Suspense fallback={<div style={{ minHeight: '500px' }} />}>
        <ProductSection />
      </Suspense>
      
      <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
        <WhyCyberPower />
      </Suspense>
      
      <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
        <Advantages />
      </Suspense>
      
      <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
        <Faqs />
      </Suspense>
      
      <Suspense fallback={<div style={{ minHeight: '300px' }} />}>
        <PartnerEnquiry />
      </Suspense>
    </div>
  );
};

export default Home;