import slika from '../assets/slika.jpg';

const ComingSoon = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={slika}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Coming Soon Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-bold text-center drop-shadow-lg">
        Coming Soon
      </div>
    </div>
  );
};

export default ComingSoon;
