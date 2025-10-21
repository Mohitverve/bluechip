
import React, { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy load the Home page
const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <>
      <Navbar />
      {/* FIXED: Added <main> landmark for accessibility */}
      <main id="main-content">
        <Suspense fallback={
          <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div role="status" aria-live="polite">Loading...</div>
          </div>
        }>
          <Home />
        </Suspense>
      </main>
      <Footer/>
    </>
  );
};

export default App;