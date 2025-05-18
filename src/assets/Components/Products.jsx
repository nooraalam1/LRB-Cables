import React, { useEffect, useState, useRef } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const drawerRef = useRef();

  useEffect(() => {
    fetch("/Json/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleOutsideClick = (e) => {
    if (drawerRef.current && !drawerRef.current.contains(e.target)) {
      setSelectedProduct(null);
    }
  };

  useEffect(() => {
    if (selectedProduct) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [selectedProduct]);

  return (
    <div className="container mx-auto px-6 py-10 relative">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
        Our Product Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden border border-gray-200 hover:border-blue-400"
          >
            <div className="h-40 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
              />
            </div>

            <div className="flex-1 flex flex-col justify-between p-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-blue-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </div>

              <div className="mt-4">
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="w-full bg-gradient-to-r from-blue-700 to-blue-400 hover:from-yellow-400 hover:to-pink-400 text-white hover:text-black font-semibold py-2 px-4 rounded-full transition duration-300 text-sm"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Drawer */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-end">
          <div
            ref={drawerRef}
            className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] h-full bg-white shadow-xl overflow-y-auto p-6 relative transition-transform transform translate-x-0"
          >
            <button
              className="absolute top-4 right-4 text-2xl font-bold text-red-600 hover:text-red-800"
              onClick={() => setSelectedProduct(null)}
            >
              &times;
            </button>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">
              {selectedProduct.name}
            </h3>
            <p className="text-gray-700 text-sm whitespace-pre-line">
              {selectedProduct.details}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
