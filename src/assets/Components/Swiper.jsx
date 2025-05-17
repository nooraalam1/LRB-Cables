const Swiper = () => (
  <div className="space-y-4">
    
<section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 px-6 md:px-10">
  <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-14">
    Chairman delivering a message
  </h2>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 items-start gap-10">
    {/* Chairman Image */}
    <div className="flex justify-center">
      <img
        src="chairman.jpeg"
        alt="Chairman"
        className="w-64 h-80 object-cover rounded-2xl shadow-2xl border-4 border-blue-300 hover:scale-105 transition duration-300"
      />
    </div>

    {/* Message Text */}
    <div className="md:col-span-2">
      <div className="bg-white p-8 rounded-3xl shadow-xl border-l-8 border-blue-500">
        <p className="text-lg text-gray-800 leading-relaxed text-justify">
          With 25 years of experience in the cable industry, I have launched
          LRB Cables to deliver top-quality, safe, and reliable cables for all
          of Bangladesh. Our products use pure copper, FR safety features, and
          virgin PVC to ensure strong performance and protect lives,
          businesses, and industries from electrical hazards. At LRB, we aim
          to build lasting bonds with users, suppliers, and businessmen
          through Love, Respect & Brotherhood — lighting up both cities and
          villages with trust and quality.
          <br />
          <h1 className="text-2xl font-semibold text-blue-800 mt-4">
            Md. Liton Ahmed <br /> 
            <span className="text-blue-600">Chairman, LRB Cables Industries Ltd.</span>
          </h1>
        </p>
      </div>
    </div>
  </div>
</section>

<section className="bg-gradient-to-br from-yellow-50 via-white to-yellow-100 py-20 px-6 md:px-10">
  <h2 className="text-4xl font-extrabold text-center text-yellow-900 mb-14">
    Managing Director delivering a message
  </h2>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 items-start gap-10">
    {/* MD Image */}
    <div className="flex justify-center">
      <img
        src="MD.jpeg"
        alt="Chairman"
        className="w-64 h-80 object-cover rounded-2xl shadow-2xl border-4 border-yellow-300 hover:scale-105 transition duration-300"
      />
    </div>

    {/* Message Text */}
    <div className="md:col-span-2">
      <div className="bg-white p-8 rounded-3xl shadow-xl border-l-8 border-yellow-500">
        <p className="text-lg text-gray-800 leading-relaxed text-justify">
          With over 15 years of hands-on experience in the cable industry, I
          am proud to lead LRB Cables Industries Ltd. on a new mission — to
          deliver world-class cables under the brand LRB Cables. We understand
          the true needs of users, suppliers, and businessmen across
          Bangladesh.That’s why we are committed to providing high-quality
          cables that feature: <br /><br />
          1) Original copper with high purity and conductivity <br />
          2) Flame Retardant (FR) and virgin PVC components <br />
          3) Reliable performance and long-lasting durability <br /><br />
          At LRB, we don’t just manufacture cables — we build connections that power life, business,
          and industry safely and reliably. Our products are designed to
          prevent electrical accidents and ensure your safety, your family’s
          security, and your business continuity. We envision a future where
          Love, Respect & Brotherhood connect not just cables, but people —
          bridging the gap between city and village, and lighting up every
          corner of Bangladesh. Join us in powering progress, building trust,
          and creating a brighter, safer tomorrow.
          <br />
          <h1 className="text-2xl font-semibold text-yellow-800 mt-4">
            H.M. Rashidul Hoque <br /> 
            <span className="text-yellow-600">Managing Director, LRB Cables Industries Ltd.</span>
          </h1>
        </p>
      </div>
    </div>
  </div>
</section>


  </div>
);

export default Swiper;
