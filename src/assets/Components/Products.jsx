import React from 'react';

const products = [
  {
    name: 'Domestic Cables',
    image: '../public/domestic.jpg',
    description: 'Reliable wiring solutions for homes and buildings.',
  },
  {
    name: 'Power Cables',
    image: '../public/Power Cables.jpeg',
    description: 'High-performance cables for power distribution.',
  },
  {
    name: 'Control Cables',
    image: '../public/Control.jpeg',
    description: 'Designed for automation, control, and signal transmission.',
  },
  {
    name: 'Submersible Cables',
    image: '../public/Sub.jpeg',
    description: 'Waterproof cables ideal for deep installations.',
  },
  {
    name: 'Communication Cables',
    image: '../public/commu.jfif',
    description: 'Reliable cables for telecommunication networks.',
  },
  {
    name: 'DC Cables',
    image: '../public/dc.jfif',
    description: 'High-efficiency cables for DC systems and solar panels.',
  },
  {
    name: 'Special Customised Cables',
    image: '../public/Special.jpeg',
    description: 'Tailor-made cables for specialized applications.',
  },
  {
    name: 'Overhead Related Cables',
    image: '../public/Overhead.jpeg',
    description: 'Durable cables for overhead transmission lines.',
  },
];

const Home = () => {
  return (
    <div className="container mx-auto px-6 py-10">

      {/* Product Categories Section */}
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
        Our Product Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {products.map((product, index) => (
          <div key={index} className="bg-white shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 rounded-lg overflow-hidden">
            <figure className="w-full h-48 bg-gray-100">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </figure>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-blue-800 mb-3">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <div>
                <button className="btn bg-blue-800 text-white hover:bg-yellow-400 hover:text-black transition duration-200 py-2 px-4 rounded-full text-sm">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Home;
