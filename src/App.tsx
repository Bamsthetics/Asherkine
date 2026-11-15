import { useState, useEffect } from 'react';
import { MotionConfig } from 'motion/react';
import { Placeholder } from './components/Placeholder';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ImpactMetrics } from './components/ImpactMetrics';
import { FeaturedBrands } from './components/FeaturedBrands';
import { Services } from './components/Services';
import { Mission } from './components/Mission';
import { Collaboration } from './components/Collaboration';
import { Footer } from './components/Footer';

function isPrototypeRoute(): boolean {
  const path = window.location.pathname.replace(/\/+$/, '').toLowerCase();
  const hash = window.location.hash.toLowerCase();
  return path === '/home' || hash === '#home' || hash === '#/home';
}

export default function App() {
  const [showPrototype, setShowPrototype] = useState<boolean>(isPrototypeRoute);

  useEffect(() => {
    const syncRoute = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#home' || hash === '#/home') {
        window.history.replaceState(null, '', '/home');
      }
      setShowPrototype(isPrototypeRoute());
    };
    syncRoute();
    window.addEventListener('popstate', syncRoute);
    window.addEventListener('hashchange', syncRoute);
    return () => {
      window.removeEventListener('popstate', syncRoute);
      window.removeEventListener('hashchange', syncRoute);
    };
  }, []);

  if (!showPrototype) {
    return (
      <MotionConfig reducedMotion="user">
        <Placeholder />
      </MotionConfig>
    );
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-[#E6FF00] selection:text-zinc-950">
        <Navbar />
        <main>
          <Hero />
          <ImpactMetrics />
          <FeaturedBrands />
          <Services />
          <Mission />
          <Collaboration />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
