import { Menu, X } from 'lucide-react';
import slika from '../assets/slika.jpg';
import { useState } from 'react';

const ComingSoonWithNavbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={slika}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-50 py-3 px-4 backdrop-blur-md">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img className="h-10 w-10 mr-2" src={slika} alt="logo" />
            <span className="text-white text-xl font-bold">Promilček</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex space-x-8 items-center">
            <a href="#" className="text-white py-2 px-4 rounded">
              Coming Soon
            </a>
            <a
              href="#"
              className="py-2 px-4 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 text-white"
            >
              Coming Soon
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleNavbar} className="text-white">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed inset-0 z-40 bg-neutral-900 bg-opacity-95 flex flex-col items-center justify-center lg:hidden">
            <ul className="space-y-6 text-center">
              <li>
                <a href="#" className="text-white text-xl">
                  Coming Soon
                </a>
              </li>
            </ul>
            <div className="mt-8 flex space-x-4">
              <a href="#" className="py-2 px-4 border rounded-md text-white">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-4 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 text-white"
              >
                Create an Account
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Coming Soon Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Coming Soon
        </h1>
      </div>
    </div>
  );
};

export default ComingSoonWithNavbar;
