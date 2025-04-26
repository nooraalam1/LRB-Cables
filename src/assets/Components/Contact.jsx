import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">Contact Us</h1>

      <div className="grid gap-8 md:grid-cols-2">
        
        {/* Chairman */}
        <div className="bg-blue-100 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center">
          <img 
            src="OIP.jfif" 
            alt="Chairman" 
            className="w-32 h-32 rounded-full mb-4 object-cover"
          />
          <h2 className="text-2xl font-semibold text-blue-900 mb-2">Chairman</h2>
          <p className="text-lg text-gray-700 mb-1">Md. Liton</p>
          <p className="text-gray-600 mb-1">📞 017-336-12151</p>
          <p className="text-gray-600">📧 rkcableliton@gmail.com</p>
        </div>

        {/* MD */}
        <div className="bg-blue-100 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center">
          <img 
            src="MD.jpeg" 
            alt="Managing Director" 
            className="w-32 h-32 rounded-full mb-4 object-cover"
          />
          <h2 className="text-2xl font-semibold text-blue-900 mb-2">Managing Director</h2>
          <p className="text-lg text-gray-700 mb-1">Rashed</p>
          <p className="text-gray-600 mb-1">📞 01738010933</p>
          <p className="text-gray-600">📧 h.m.rashidul86@gmail.com</p>
        </div>

        {/* Director 1 */}
        <div className="bg-blue-100 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center">
          <img 
            src="OIP.jfif" 
            alt="Director" 
            className="w-32 h-32 rounded-full mb-4 object-cover"
          />
          <h2 className="text-2xl font-semibold text-blue-900 mb-2">Director</h2>
          <p className="text-lg text-gray-700 mb-1">Razib</p>
          <p className="text-gray-600 mb-1">📞 01721-236781</p>
          <p className="text-gray-600">📧 rajibmiah6781@gmail.com</p>
        </div>

        {/* Director 2 */}
        <div className="bg-blue-100 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center">
          <img 
            src="OIP.jfif" 
            alt="Director" 
            className="w-32 h-32 rounded-full mb-4 object-cover"
          />
          <h2 className="text-2xl font-semibold text-blue-900 mb-2">Director</h2>
          <p className="text-lg text-gray-700 mb-1">Ibrahim</p>
          <p className="text-gray-600 mb-1">📞 01718-564598</p>
          <p className="text-gray-600">📧 ibrahimbhuiyan828@gmail.com</p>
        </div>

      </div>

      {/* Office Addresses */}
      <div className="mt-16 bg-blue-50 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Our Offices</h2>

        <div className="space-y-6 text-center">
          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-1">Head Office</h3>
            <p className="text-gray-700">Borishol, Akhaura - 3454, Brahmanbaria</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-1">Emergency & Dhaka Office</h3>
            <p className="text-gray-700">161 Nawbabpur Road, Nawbabpur, Dhaka - 1100</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
