import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import htmlLogo from '../images/skills-logos/html.png';
import cssLogo from '../images/skills-logos/css.png';
import javascriptLogo from '../images/skills-logos/javascript.png';
import reactLogo from '../images/skills-logos/react.png';
import nodeJsLogo from '../images/skills-logos/nodejs.png';
import expressLogo from '../images/skills-logos/express.png';
import mongoDBLogo from '../images/skills-logos/mongodb.png';
import ES6Logo from '../images/skills-logos/es6.png'

const items = [
    <div className='logo'>
    <img src={htmlLogo} alt='logo' />
    <div className='skill' >HTML</div>
    </div>,
    <div className='logo'>
    <img src={cssLogo} alt='logo' />
    <div className='skill' >CSS</div>
    </div>,
    <div className='logo'>
    <img src={javascriptLogo} alt='logo' />
    <div className='skill' >Javascript</div>
    </div>,
    <div className='logo'>
    <img src={reactLogo} alt='logo' />
    <div className='skill' >React</div>
    </div>,
    <div className='logo'>
    <img src={nodeJsLogo} alt='logo' />
    <div className='skill' >Node.js</div>
    </div>,
    <div className='logo'>
    <img src={expressLogo} alt='logo' />
    <div className='skill' >Express.js</div>
    </div>,
    <div className='logo'>
    <img src={mongoDBLogo} alt='logo' />
    <div className='skill' >MongoDB</div>
    </div>,
    <div className='logo'>
    <img src={ES6Logo} alt='logo' />
    <div className='skill' >ES6</div>
    </div>,
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
          paddingLeft={60}
          items={items}
          />
      </div>
  );
}
export default Gallery;