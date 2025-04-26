import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 via-blue-900 to-blue-950 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-10">

        {/* Logo and Company Name */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="Capture.PNG" alt="Company Logo" className="h-12 w-12 object-contain" /> {/* Replace logo.png with your actual logo */}
            <h2 className="text-2xl font-bold">LRB Cables Industries Ltd.</h2>
          </div>

          {/* Social Media */}
          <div className="flex space-x-6 text-2xl mt-6 md:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition">
              <FaLinkedinIn />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Office Addresses */}
        <div className="text-center md:text-left text-sm leading-6">
          <p><span className="font-semibold">Head Office:</span> Borishol, Akhaura - 3454, Brahmanbaria</p>
          <p><span className="font-semibold">Emergency & Dhaka Office:</span> 161 Nawbabapur Road, Nawbabpur, Dhaka - 1100</p>
        </div>

        {/* Hotline and Copyright */}
        <div className="text-center text-sm mt-4">
          <p>Hotline: <span className="font-semibold">01821727272</span></p>
          <p className="mt-2">&copy; {new Date().getFullYear()} LRB Cables Industries Ltd. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
