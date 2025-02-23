import video3 from '../assets/video3.mp4';
import video4 from '../assets/video4.mp4';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        PROMILČEK UREĐAJ
        <span className="bg-gradient-to-r from-pink-300 to-pink-600 text-transparent bg-clip-text">
          {' '}
        </span>
      </h1>
      <p className="mt-10 text-2xl text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-pink-600 max-w-6xl">
        Jeste li sigurni da ste spremni za vožnju? <br /> Promilček vam u
        nekoliko sekundi daje odgovor – ubacite 1 euro, puhnete u slamčicu i
        saznajte odmah!
      </p>

      {/*
        <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          O nama
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Više...
          </div>
        </a>*/}

      <div className="flex mx-12  mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-pink-700 shadow-sm shadow-pink-400 mx-4 my-4"
        >
          <source src={video3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-pink-700 shadow-sm shadow-pink-400 mx-4 my-4"
        >
          <source src={video4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
