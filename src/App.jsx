import React, { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy load the Home page
const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div style={{ minHeight: '100vh' }}>Loading...</div>}>
        <Home />
      </Suspense>
      <Footer/>
    </>
  );
};

export default App;