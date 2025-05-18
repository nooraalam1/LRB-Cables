const Swiper = () => (
  <div className="space-y-16">
    
    {/* Chairman Section */}
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-4 sm:px-6 md:px-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-blue-900 mb-10 sm:mb-14">
        Chairman delivering a message
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 items-start gap-8 md:gap-10">
        <div className="flex justify-center">
          <img
            src="chairman.jpeg"
            alt="Chairman"
            className="w-52 sm:w-60 md:w-64 h-72 sm:h-80 object-cover rounded-2xl shadow-2xl border-4 border-blue-300 hover:scale-105 transition duration-300"
          />
        </div>

        <div className="md:col-span-2">
          <div className="bg-white p-5 sm:p-6 md:p-8 rounded-3xl shadow-xl border-l-8 border-blue-500">
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed text-justify">
              As someone who has been deeply involved in the cable industry for many years, I’ve witnessed both the challenges and the tremendous potential within this vital sector. Throughout my career, I have gained valuable insights into what truly matters — not just high performance, but also safety, consistency, and trust.

Driven by this understanding and fueled by a passion to contribute to national development, I founded LRB Cables Industries Ltd. with a clear mission: to provide Bangladesh with cables that are uncompromising in quality, engineered for safety, and designed to stand the test of time. Our cables are crafted with pure copper, fire-retardant (FR) technology, and virgin PVC, ensuring superior conductivity, durability, and resistance to electrical hazards.

But beyond the products, LRB stands for something greater. The name itself — Love, Respect & Brotherhood — reflects our deep-rooted belief in building relationships, not just running a business. We aim to form strong bonds with our customers, partners, and employees through honesty, excellence, and shared growth.

Whether it’s lighting up a rural home, powering a growing industry, or supporting the infrastructure of a bustling city, LRB Cables is here to empower lives. We envision a future where Bangladesh is not only electrified but elevated — with safety, quality, and human connection at its core.

              <br />
              <h1 className="text-base sm:text-lg md:text-xl font-semibold text-blue-800 mt-4">
                Md. Liton Ahmed
              </h1>
              <h1 className="text-base sm:text-lg md:text-xl font-semibold text-blue-800 mt-2">
                Chairman,
              </h1>
              <h1 className="text-base sm:text-lg md:text-xl font-semibold text-blue-800 mt-2">
                LRB Cables Industries Ltd.
              </h1>
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Managing Director Section */}
    <section className="bg-gradient-to-br from-yellow-50 via-white to-yellow-100 py-16 px-4 sm:px-6 md:px-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-yellow-900 mb-10 sm:mb-14">
        Managing Director delivering a message
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 items-start gap-8 md:gap-10">
        <div className="flex justify-center">
          <img
            src="MD.jpeg"
            alt="Chairman"
            className="w-52 sm:w-60 md:w-64 h-72 sm:h-80 object-cover rounded-2xl shadow-2xl border-4 border-yellow-300 hover:scale-105 transition duration-300"
          />
        </div>

        <div className="md:col-span-2">
          <div className="bg-white p-5 sm:p-6 md:p-8 rounded-3xl shadow-xl border-l-8 border-yellow-500">
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed text-justify">
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
               <h1 className="text-base sm:text-lg md:text-xl font-semibold text-blue-800 mt-4">
               H.M. Rashidul Hoque
              </h1>
              <h1 className="text-base sm:text-lg md:text-xl font-semibold text-blue-800 mt-2">
                Managing Director,
              </h1>
              <h1 className="text-base sm:text-lg md:text-xl font-semibold text-blue-800 mt-2">
               LRB Cables Industries Ltd.
              </h1>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Swiper;
