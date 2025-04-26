const aboutContent = [
    {
      image: '/public/1.jpeg',
      text: 'We are a leading manufacturer of high-quality cables, ensuring safety and performance in every product.',
    },
    {
      image: '/public/2.jpeg',
      text: 'Our commitment to innovation drives us to create products that meet the needs of modern industries.',
    },
    {
      image: '/public/3.jpeg',
      text: 'With a strong focus on customer satisfaction, we strive to provide solutions that add value to our clients.',
    },
  ];
  
  const About = () => {
    return (
      <section className="mt-16 bg-gray-50 py-16">
        <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-12">About Us</h2>
        <div className="space-y-16">
          {aboutContent.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 px-4 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={item.image}
                  alt={`About Image ${index + 1}`}
                  className="w-full h-80 object-cover rounded-lg shadow-lg transform transition-transform hover:scale-105"
                />
              </div>
  
              {/* Text */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <p className="text-xl font-medium text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default About;
  