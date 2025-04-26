import { useEffect, useState } from 'react';

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % 3);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const products = [
    {
      name: 'Domestic Cables',
      images: ['domestic.jpg'],
      description: 'High-quality domestic cables ideal for household wiring needs.',
    },
    {
      name: 'Power Cables',
      images: ['Power Cables.jpeg'],
      description: 'Durable power cables for industrial and commercial applications.',
    },
    {
      name: 'Control Cables',
      images: ['Control.jpeg'],
      description: 'Reliable control cables for automation and instrumentation.',
    },
    {
      name: 'Submersible Cables',
      images: ['Sub.jpeg'],
      description: 'Specialized submersible cables for underwater applications.',
    },
    {
      name: 'Communication Cables',
      images: ['commu.jpg'],
      description: 'Efficient communication cables ensuring seamless data transfer.',
    },
    {
      name: 'DC Cables',
      images: ['dc.jpg'],
      description: 'Premium DC cables optimized for solar and battery systems.',
    },
    {
      name: 'Special Customised Cables',
      images: ['Special.jpeg'],
      description: 'Tailored cables designed for specific industrial requirements.',
    },
    {
      name: 'Overhead Related Cables',
      images: ['Overhead.jpeg'],
      description: 'Overhead line cables offering durability and high performance.',
    },
  ];

  return (
    <div className="container mx-auto mt-10">
      {/* Carousel */}
      <div className="carousel w-full">
        <div className={`carousel-item w-full ${activeIndex === 0 ? 'block' : 'hidden'}`}>
          <img src="Capture2.PNG" alt="Banner 1" className="w-full" />
        </div>
        <div className={`carousel-item w-full ${activeIndex === 1 ? 'block' : 'hidden'}`}>
          <img src="Capture.PNG" alt="Banner 2" className="w-full" />
        </div>
        <div className={`carousel-item w-full ${activeIndex === 2 ? 'block' : 'hidden'}`}>
          <img src="Capture2.PNG" alt="Banner 3" className="w-full" />
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="flex justify-center py-4 space-x-2">
        <button onClick={() => setActiveIndex((activeIndex - 1 + 3) % 3)} className="btn btn-circle">❮</button>
        <button onClick={() => setActiveIndex((activeIndex + 1) % 3)} className="btn btn-circle">❯</button>
      </div>

      {/* Featured Products Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">Our Products</h2>
        <div className="space-y-16">
          {products.map((product, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <div className="flex items-center">
                {/* Product Image on the left */}
                <div className="w-1/2">
                  <img 
                    src={product.images[0]} 
                    alt={product.name} 
                    className="w-full h-48 object-cover rounded-lg shadow-md" 
                  />
                </div>

                {/* Product Description on the right */}
                <div className="w-1/2 pl-8">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-4">{product.name}</h3>
                  <p className="mb-6 text-gray-600">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates Section */}
      <section className="mt-20 mb-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">Our Certificates</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-4">
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
            <img src="BSTI.jpg" alt="BSTI Certificate" className="w-40 h-40 object-contain mb-4" />
            <h3 className="text-lg font-semibold">BSTI Certified</h3>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
            <img src="Flame.png" alt="Flame Retard Certificate" className="w-40 h-40 object-contain mb-4" />
            <h3 className="text-lg font-semibold">Flame Retardant Tested</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
