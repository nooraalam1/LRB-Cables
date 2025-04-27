import React from 'react';

const products = [
  {
    name: 'Domestic Cables',
    image: 'dmstic.jpeg',
    description: 'Reliable wiring solutions for homes and buildings.',
  },
  {
    name: 'Power Cables',
    image: 'pow c.jpeg',
    description: 'High-performance cables for power distribution.',
  },
  {
    name: 'Control Cables',
    image: 'Control.jpeg',
    description: 'Designed for automation, control, and signal transmission.',
  },
  {
    name: 'Submersible Cables',
    image: 'Sub.jpeg',
    description: 'Waterproof cables ideal for deep installations.',
  },
  {
    name: 'Communication Cables',
    image: 'commu.jpg',
    description: 'Reliable cables for telecommunication networks.',
  },
  {
    name: 'DC Cables',
    image: 'dc c.jpeg',
    description: 'High-efficiency cables for DC systems and solar panels.',
  },
  {
    name: 'Special Customised Cables',
    image: 'custom.jpeg',
    description: 'Tailor-made cables for specialized applications.',
  },
  {
    name: 'Overhead Related Cables',
    image: 'Overhead.jpeg',
    description: 'Durable cables for overhead transmission lines.',
  },
];

const Home = () => {
  return (
    <div className="container mx-auto px-6 py-10">

      {/* Product Categories Section */}
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
        Our Product Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden border border-gray-200 hover:border-blue-400"
          >
            {/* Image */}
            <div className="h-40 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
              />
            </div>

            {/* Details */}
            <div className="flex-1 flex flex-col justify-between p-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-blue-800">{product.name}</h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </div>

              {/* Button */}
              <div className="mt-4">
                <button className="w-full bg-gradient-to-r from-blue-700 to-blue-400 hover:from-yellow-400 hover:to-pink-400 text-white hover:text-black font-semibold py-2 px-4 rounded-full transition duration-300 text-sm">
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
