import React from 'react';
import Skills from './Skills.js';

export default function About() {
  return (
    <div className="about" id="about">
      <h1>About me</h1>
      <div>
        I am a Full-stack developer located in Leipzig Germany, I studied
        Web-development at{' '}
        <span>
          <a href="https://digitalcareerinstitute.org/">DCI</a>
        </span>{' '}
        (Digital Career Institute gGmbH), Before that, I studied Translation
        (Arabic-English) and worked for four years in translating video games
        and Magazine articles. After moving to Germany I worked in a Hotel as a
        receptionist for two years.
      </div>

      <Skills />
    </div>
  );
}
