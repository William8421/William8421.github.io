import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

//logos
import htmlLogo from '../images/skills-logos/html.png';
import cssLogo from '../images/skills-logos/css.png';
import javascriptLogo from '../images/skills-logos/javascript.png';
import reactLogo from '../images/skills-logos/react.png';
import nodeJsLogo from '../images/skills-logos/nodejs.png';
import expressLogo from '../images/skills-logos/express.png';
import mongoDBLogo from '../images/skills-logos/mongodb.png';
import ES6Logo from '../images/skills-logos/es6.png';
import TypescriptLogo from '../images/skills-logos/ts-logo-512.png';
import GraphQlLogo from '../images/skills-logos/GraphQLLogo1.png';

const logos = [
  { img: htmlLogo, name: 'HTML' },
  { img: cssLogo, name: 'CSS' },
  { img: javascriptLogo, name: 'JavaScript' },
  { img: reactLogo, name: 'React' },
  { img: nodeJsLogo, name: 'Node.js' },
  { img: expressLogo, name: 'Express.js' },
  { img: mongoDBLogo, name: 'MongoDB' },
  { img: ES6Logo, name: 'ES6' },
  { img: TypescriptLogo, name: 'TypeScript' },
  { img: GraphQlLogo, name: 'GraphQl' },
];

const items = logos.map((item) => {
  return (
    <div className="logo">
      <img src={item.img} alt="logo" />

      <div className="skill">{item.name}</div>
    </div>
  );
});

const Skills = () => {
  return (
    <div className="skills">
      <div className="carousel">
        <AliceCarousel
          autoPlay
          disableButtonsControls
          keyboardNavigation
          disableDotsControls
          animationDuration={1000}
          infinite
          items={items}
        />
      </div>
    </div>
  );
};
export default Skills;
