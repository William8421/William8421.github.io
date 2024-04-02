import React from "react";
import { useState } from "react";
import project1 from "../images/MovieApp.jpg";
import project2 from "../images/finalProject.jpg";
import project4 from "../images/typescript-react-shopppingApp.png";
import project5 from "../images/project5home1.png";
import project6_recipe from "../images/project6_recipe.png";
import project6_nutrition from "../images/project6_nutrition.png";
import project6_database from "../images/project6_database.png";
import project6_about from "../images/project6_about.png";
import project7_tasks from "../images/project-7-tasks.png";
import project7_home from "../images/project-7-home.png";
import project7_profile from "../images/project-7-profile.png";
import project7_about from "../images/project-7-about.png";
import { useEffect } from "react";

export default function Projects() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const taskManagerImages = [
    project7_home,
    project7_profile,
    project7_tasks,
    project7_about,
  ];

  const recipeAppImages = [
    project6_recipe,
    project6_nutrition,
    project6_database,
    project6_about,
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % taskManagerImages.length
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, [taskManagerImages.length]);

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
            href="https://vue-recipe-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={recipeAppImages[currentImageIndex]} alt="project" />
            <div className="project-name">VUE3 RECIPE APP</div>
            <p className="project-description">
              A Vue3/TypeScript app which leverages the power of Edamam's APIs
              to bring a seamless and efficient culinary experience.
            </p>
          </a>
          <a
            className="github-link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/William8421/recipe-vue-app"
          >
            Github
          </a>
        </div>
        <div className="project">
          <a
            href="http://ng-task-manager.s3-website.eu-central-1.amazonaws.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={taskManagerImages[currentImageIndex]} alt="project" />
            <div className="project-name"> TASK MANAGER </div>
            <p className="project-description">
              A fullstack application created with Node.js, Express, PostgreSQL,
              and Angular, leveraging Docker for containerization. Hosted on
              AWS.
            </p>
          </a>
          <a
            className="github-link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/William8421/task_manager"
          >
            Github
          </a>
        </div>
        <div className="project project-gif">
          <a
            href="https://drive.google.com/file/d/13W563F2vLFtceFDfxQUTImNmH5XsYN7x/view?usp=sharing"
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
