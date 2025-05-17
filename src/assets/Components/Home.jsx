import { useEffect, useState } from 'react';
import Swiper from '../Components/Swiper';
import ProdImages from './ProdImages';

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % 3);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const categorizedProducts = {
    "Domestic Use": [
      {
        name: 'Domestic Cables',
        image: 'dmstic.jpeg',
        description: 'High-quality domestic cables ideal for household wiring needs.',
      },
    ],
    "Industrial Use": [
      {
        name: 'Power Cables',
        image: 'pow c.jpeg',
        description: 'Durable power cables for industrial and commercial applications.',
      },
      {
        name: 'Control Cables',
        image: 'Control.jpeg',
        description: 'Reliable control cables for automation and instrumentation.',
      },
      {
        name: 'Overhead Related Cables',
        image: 'Overhead.jpeg',
        description: 'Overhead line cables offering durability and high performance.',
      },
    ],
    "Special Purpose": [
      {
        name: 'Submersible Cables',
        image: 'Sub.jpeg',
        description: 'Specialized submersible cables for underwater applications.',
      },
      {
        name: 'Communication Cables',
        image: 'commu.jpg',
        description: 'Efficient communication cables ensuring seamless data transfer.',
      },
      {
        name: 'DC Cables',
        image: 'dc c.jpeg',
        description: 'Premium DC cables optimized for solar and battery systems.',
      },
      {
        name: 'Special Customised Cables',
        image: 'custom.jpeg',
        description: 'Tailored cables designed for specific industrial requirements.',
      },
    ],
  };

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
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Our Products</h2>

        {Object.keys(categorizedProducts).map((category, idx) => (
          <div key={idx} className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8">{category}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {categorizedProducts[category].map((product, pIdx) => (
                <div 
                  key={pIdx} 
                  className="bg-white shadow-md rounded-lg overflow-hidden transition hover:shadow-lg hover:scale-105"
                >
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-blue-700 mb-2">{product.name}</h4>
                    <p className="text-gray-600 text-sm">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

     


     <div className=''>
      <div> <Swiper></Swiper></div>
     </div>
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
<div>
  <ProdImages></ProdImages>
</div>
      
    </div>
  );
};

export default Home;
