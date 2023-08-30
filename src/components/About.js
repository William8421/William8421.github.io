import React from 'react';
import { logos } from './Skills.js';

export default function About() {
  const skills = logos.map((skill) => {
    return (
        <div className="skill" key={skill.name}>
            <img src={skill.img} alt="logo" />

            <div>{skill.name}</div>
        </div>
    );
});
  return (
    <div className="about" id="about">
      <h1>About me</h1>
      <div className='about-me'>
        <p>
          I'm a Leipzig-based full stack web developer with a passion for crafting dynamic digital experiences.
          My journey into the world of web development began at {' '}
          <span>
            <a target='_blank' href="https://digitalcareerinstitute.org/" rel="noreferrer">DCI</a>
          </span>{' '}
          (Digital Career Institute gGmbH), where I shaped my skills and introduced myself with the ever-evolving
          landscape of web technologies.
        </p>
        <p>
          Before I began my journey into web development, I pursued a path in translation, specializing in Arabic-English
          English-Arabic language pairs. Over the course of four enriching years, I contributed my linguistic expertise
          to the worlds of video games and movies localization, and magazine article translation.
        </p>
        <p>
          My transition to Germany marked a pivotal juncture in my career. During this phase, I embraced new challenges
          and worked as a receptionist in the hospitality industry for two years, further enhancing my communication
          and interpersonal skills.
        </p>
        <p>
          My diverse background, spanning translation, hospitality, and web development, equips me with a unique
          perspective and a versatile skill set. With a dedication to creating captivating digital solutions,
          I'm eager to continue my journey of innovation and growth in the dynamic realm of web development.
        </p>
      </div>
      <h2>My Skills</h2>
      <div className='skills'>{skills}</div>
    </div>
  );
}
