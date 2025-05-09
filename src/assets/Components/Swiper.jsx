const Swiper = () => {
  return (
    <div className="space-y-4">
      {/* Line 1 */}
      <div className="md:grid grid-cols-5 gap-4">
        <img src="cable1.jpg" alt="Cable 1" />
        <img src="cable2.jpg" alt="Cable 2" />
        <img src="cable3.jpg" alt="Cable 3" />
                <img src="cable4.jpg" alt="Cable 4" />
        <img src="cable8.jpg" alt="Cable 8" />
      </div>

      {/* Line 2 (centered image) */}
      <div className="md:flex justify-center">
        <img src="cable5.jpg" alt="Cable 5" className="w-2/5" />
      </div>


      {/* Line 4 */}
      <div className="md:grid grid-cols-3 gap-4">
        <img src="cable6.jpg" alt="Cable 6" />
        <img src="cable7.jpg" alt="Cable 7" />
        <img src="cable9.jpg" alt="Cable 9" />
      </div>
    </div>
  )
}

export default Swiper
