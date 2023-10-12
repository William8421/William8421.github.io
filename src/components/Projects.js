import React from "react";
import project1 from "../images/MovieApp.jpg";
import project2 from "../images/finalProject.jpg";
import project3 from "../images/graphql-project.png";
import project4 from "../images/typescript-react-shopppingApp.png";
import project5 from "../images/project5home1.png";

export default function Projects() {
  return (
    <div id="projects" className="projects">
      <h1>Personal Projects</h1>
      <div className="projects-container">
        <div className="project">
          <a
            href="https://w-mallak-movieapp.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <img src={project1} alt="project" />
            <div className="project-name">MOVIE APP</div>
            <p className="project-description">
              A fully functional web app providing information about movies from
              OMDB/TMDB APIs.{" "}
            </p>
          </a>
          <a
            className="github-link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/William8421/movieapp"
          >
            Github
          </a>
        </div>
        <div className="project">
          <a
            href="https://evconnection.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={project2} alt="project" />
            <div className="project-name">
              EV-<span>C</span>ONNECTION
            </div>
            <p className="project-description">
              An App, where EV drivers can charge their electrical vehicles just
              by connecting to wall-box owners in their surroundings.
            </p>
          </a>
          <a
            className="github-link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/William8421/EV-Connection"
          >
            Github
          </a>
        </div>
        <div className="project">
          <a
            href="https://shopping-app-typescript.netlify.app/store"
            target="_blank"
            rel="noreferrer"
          >
            <img src={project4} alt="project" />
            <div className="project-name">SHOPPING-CART APP</div>
            <p className="project-description">
              A fullstack e-commerce app created with typescript-react
            </p>
          </a>
          <a
            className="github-link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/William8421/typescript-shopping-app"
          >
            Github
          </a>
        </div>
        <div className="project">
          <a
            href="https://angular-shopping-cart-app.netlify.app/store"
            target="_blank"
            rel="noreferrer"
          >
            <img src={project5} alt="project" />
            <div className="project-name">Angular SHOPPING-CART APP</div>
            <p className="project-description">
              A Frontend e-commerce app created with Angular 14
            </p>
          </a>
          <a
            className="github-link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/William8421/angular-shoppingCart"
          >
            Github
          </a>
        </div>
        <div className="project">
          <a
            href="https://github.com/William8421/MusicBandsGraphQl"
            target="_blank"
            rel="noreferrer"
          >
            <img src={project3} alt="project" />
            <div className="project-name"> PLAYLIST APP </div>
            <p className="project-description">
              A fullstack app created with GraphQL-React to add songs and
              singers/bands to the music playlist.
            </p>
          </a>
          <a
            className="github-link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/William8421/MusicBandsGraphQl"
          >
            Github
          </a>
        </div>
        <div className="project project-gif">
          <a
            href="https://drive.google.com/file/d/1jnSK0Y3jvDyappS43CI07VuIP6IKd0M2/view"
            target="_blank"
            rel="noreferrer"
          >
            <div className="gif-container"></div>
            <div className="project-name"> SPRING BOOT APP </div>
            <p className="project-description">
              A fullstack social media app created with spring boot-react, where
              users can connect with friends and share their thoughts.
            </p>
          </a>
          <a
            className="github-link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/William8421/springBootApp"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
