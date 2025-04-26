import  { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-yellow-400 text-3xl font-extrabold tracking-wide">
        LRB<span className="text-white"> Cables Industries Ltd.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-lg font-medium">
          <NavLink to='/' className='text-white hover:text-yellow-400 transition duration-300'>Home</NavLink>
          <NavLink to='/products' className='text-white hover:text-yellow-400 transition duration-300'>Products</NavLink>
          <NavLink to='/contact' className='text-white hover:text-yellow-400 transition duration-300'>Contact</NavLink>
          <NavLink to='/about' className='text-white hover:text-yellow-400 transition duration-300'>About</NavLink>
         
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
       <div className="md:hidden flex flex-col items-center mt-4 space-y-4 text-lg font-semibold">
       <NavLink 
         to="/" 
         className={({ isActive }) => 
           isActive 
             ? "text-yellow-400 transition duration-300" 
             : "text-white hover:text-yellow-400 transition duration-300"
         }
       >
         Home
       </NavLink>
     
       <NavLink 
         to="/products" 
         className={({ isActive }) => 
           isActive 
             ? "text-yellow-400 transition duration-300" 
             : "text-white hover:text-yellow-400 transition duration-300"
         }
       >
         Products
       </NavLink>
     
       <NavLink 
         to="/contact" 
         className={({ isActive }) => 
           isActive 
             ? "text-yellow-400 transition duration-300" 
             : "text-white hover:text-yellow-400 transition duration-300"
         }
       >
         Contact
       </NavLink>
       <NavLink 
         to="/about" 
         className={({ isActive }) => 
           isActive 
             ? "text-yellow-400 transition duration-300" 
             : "text-white hover:text-yellow-400 transition duration-300"
         }
       >
         About
       </NavLink>
       
     </div>
      )}
    </nav>
  );
};

export default Navbar;
