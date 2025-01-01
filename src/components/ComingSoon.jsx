//import React from 'react';
import slika from '../assets/slika.jpg';

const ComingSoon = () => {
  return (
    <div
      style={{
        position: 'relative',
        height: '100vh', // Full screen height
        width: '100vw', // Full screen width
        overflow: 'hidden',
        margin: '0 auto', // Centers the content horizontally
      }}
    >
      {/* Background Image */}
      <img
        src={slika}
        alt="Background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Ensures the image covers the screen
        }}
      />

      {/* Coming Soon Text */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '4rem',
          fontWeight: 'bold',
          textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)',
          textAlign: 'center',
        }}
      >
        Coming Soon
      </div>
    </div>
  );
};

export default ComingSoon;
