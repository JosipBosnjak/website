//import FeatureSection from './components/FeatureSection';
//import Footer from './components/Footer';
//import HeroSection from './components/HeroSection';
import ComingSoon from './components/ComingSoon';
import Navbar from './components/Navbar';
//import Pricing from './components/Pricing';
//import Testimonials from './components/Testimonials';
//import Workflow from './components/Workflow';

const App = () => {
  return (
    <>
      <div className="w-full">
        <Navbar />
        <ComingSoon />
        {/*
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
        */}
      </div>
    </>
  );
};

export default App;
