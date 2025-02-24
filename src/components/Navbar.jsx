import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.svg';
import { navItems } from '../constants';
import { useState } from 'react';

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <nav className="top-0 z-50 w-full py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">Promilček</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index} className="py-4">
                <button onClick={() => handleScroll(item.href)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/*<ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href="{item.href}">{item.label}</a>
              </li>
            ))}
          </ul>*/}

          <div className="hidden lg:flex justify-center space-x-12 items-center">
            {/*<a
              href="https://promilcek.com/"
              className="py-2 px-3 rounded.md"
            ></a>*/}
            <a
              href="https://gmail.com/"
              target="_blank"
              className="bg-gradient-to-r from-pink-600 to-pink-500 py-2 px-3 rounded-md"
            >
              E-mail: info@promilcek.com
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <button onClick={() => handleScroll(item.href)}>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a
                href="https://gmail.com/"
                target="_blank"
                className="py-2 px-3 rounded-md bg-gradient-to-t from-pink-600 to-pink-500"
              >
                info@promilcek.com
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
