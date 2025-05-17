import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 via-blue-900 to-blue-950 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-10">

        {/* Logo and Company Name */}
        <div>
          <div className="flex justify-center items-center mb-4">
            <img src="Capture.PNG" alt="Company Logo" className="w-40 md:w-52 object-contain" />
          </div>
          <h2 className="text-center text-2xl md:text-4xl font-bold">LRB Cables Industries Ltd.</h2>
        </div>

        {/* Office Addresses and Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="leading-6 text-base md:text-xl">
            <p><span className="font-semibold">Head Office:</span> Borishol, Akhaura - 3454, Brahmanbaria</p>
            <p><span className="font-semibold">Emergency & Dhaka Office:</span> 161 Nawbabapur Road, Nawbabpur, Dhaka - 1100</p>
          </div>
          <div className="flex space-x-6 text-2xl">
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

        {/* Hotline and Copyright */}
        <div className="text-center mt-4 text-sm md:text-xl">
          <p>Hotline: <span className="font-semibold">01821727272</span></p>
          <p className="mt-2">&copy; {new Date().getFullYear()} LRB Cables Industries Ltd. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
