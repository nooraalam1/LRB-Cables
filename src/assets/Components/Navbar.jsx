import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  ShoppingBag,
  Phone,
  Info,
  Menu,
  X
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        
        {/* Logo */}
        <div className="text-yellow-400 text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide">
          LRB<span className="text-white"> Cables Industries Ltd.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-base lg:text-lg font-medium items-center">
          <NavLink to="/" className="flex items-center gap-1 text-white hover:text-yellow-400 transition duration-300">
            <Home className="w-5 h-5" /> Home
          </NavLink>
          <NavLink to="/products" className="flex items-center gap-1 text-white hover:text-yellow-400 transition duration-300">
            <ShoppingBag className="w-5 h-5" /> Products
          </NavLink>
          <NavLink to="/contact" className="flex items-center gap-1 text-white hover:text-yellow-400 transition duration-300">
            <Phone className="w-5 h-5" /> Contact
          </NavLink>
          <NavLink to="/about" className="flex items-center gap-1 text-white hover:text-yellow-400 transition duration-300">
            <Info className="w-5 h-5" /> About
          </NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Slide-in Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-900 text-white shadow-lg transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden z-40`}
      >
        <div className="flex justify-between items-center p-4 border-b border-blue-700">
          <span className="text-yellow-400 text-xl font-bold">Menu</span>
          <button onClick={() => setIsOpen(false)} aria-label="Close">
            <X className="w-7 h-7" />
          </button>
        </div>
        <div className="flex flex-col space-y-4 p-4 text-base sm:text-lg font-semibold">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive ? 'text-yellow-400' : 'hover:text-yellow-400'
              } transition duration-300`
            }
          >
            <Home className="w-5 h-5" /> Home
          </NavLink>
          <NavLink
            to="/products"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive ? 'text-yellow-400' : 'hover:text-yellow-400'
              } transition duration-300`
            }
          >
            <ShoppingBag className="w-5 h-5" /> Products
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive ? 'text-yellow-400' : 'hover:text-yellow-400'
              } transition duration-300`
            }
          >
            <Phone className="w-5 h-5" /> Contact
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive ? 'text-yellow-400' : 'hover:text-yellow-400'
              } transition duration-300`
            }
          >
            <Info className="w-5 h-5" /> About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
