import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Career from './pages/Career';
import Contactus from './pages/Contactus';
import IntroLoader from './components/IntroLoader';
import PageTransition from './components/PageTransition';

const ScrollToTop = () => {                            // Scroll to top on route change
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>     <AnimatePresence mode="wait">
        {isLoading && (
          <IntroLoader key="loader" finishLoading={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <ScrollToTop />

      {!isLoading && (
        <div className="flex flex-col min-h-screen bg-vvrm-dark">
          <Navbar />
          <div className="grow">

            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
                <Route path="/career" element={<PageTransition><Career /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><Contactus /></PageTransition>} />
              </Routes>
            </AnimatePresence>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

function App() {                  // Wrapping AppContent with Router
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;