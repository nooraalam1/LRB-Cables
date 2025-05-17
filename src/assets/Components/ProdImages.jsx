import React from 'react';

const ProdImages = () => {
    return (
        <div>
            <section className="bg-white py-20 px-6 md:px-10">
  <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-14">
    Our Cable Product Gallery
  </h2>

  {/* Grid Layout for Top Row (5 Images) */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
    <img src="cable1.jpg" alt="Cable 1" className="rounded-xl shadow-md hover:scale-105 transition duration-300" />
    <img src="cable2.jpg" alt="Cable 2" className="rounded-xl shadow-md hover:scale-105 transition duration-300" />
    <img src="cable3.jpg" alt="Cable 3" className="rounded-xl shadow-md hover:scale-105 transition duration-300" />
    <img src="cable4.jpg" alt="Cable 4" className="rounded-xl shadow-md hover:scale-105 transition duration-300" />
    <img src="cable8.jpg" alt="Cable 8" className="rounded-xl shadow-md hover:scale-105 transition duration-300" />
  </div>

  {/* Centered Larger Image */}
  <div className="flex justify-center mb-8">
    <img src="cable5.jpg" alt="Cable 5" className="w-full md:w-2/3 rounded-xl shadow-lg hover:scale-105 transition duration-300" />
  </div>

  {/* Bottom Row Grid (3 Images) */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <img src="cable6.jpg" alt="Cable 6" className="rounded-xl shadow-md hover:scale-105 transition duration-300" />
    <img src="cable7.jpg" alt="Cable 7" className="rounded-xl shadow-md hover:scale-105 transition duration-300" />
    <img src="cable9.jpg" alt="Cable 9" className="rounded-xl shadow-md hover:scale-105 transition duration-300" />
  </div>
</section>

        </div>
    );
};

export default ProdImages;