import React from 'react';
import Skills from './Skills.js';

export default function About() {
  return (
    <div className='about' id='about'>
      <h1>About me</h1>
      <div>
       I am a Full-stack developer located in Leipzig Germany,
       I studied Web-development at <span><a href='https://digitalcareerinstitute.org/' >DCI</a></span> (Digital Career Institute gGmbH),  
       I am a fast learner, problem solver and I like building and fixing stuff.  
       </div>
        
        <Skills/>
    </div>
  )
}
