import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
    <div className='logos'></div>
    // <div className='skill' >HTML/CSS</div>,
    // <div className='skill' >Javascript</div>,
    // <div className='skill' >React</div>,
    // <div className='skill' >Node.js</div>,
    // <div className='skill' >Express</div>,
    // <div className='skill' >MongDB</div>,
    // <div className='skill' >ES6</div>
];

const Gallery = () => {
  return (
      <div className='skills' >
          <AliceCarousel
          autoPlay
          disableButtonsControls
          disableDotsControls
          animationDuration={2000}
          infinite
          paddingLeft={140}
          items={items}
          />
      </div>
  );
}
export default Gallery;