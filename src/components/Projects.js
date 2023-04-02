import project1 from '../images/MovieApp.jpg';
import project2 from '../images/finalProject.png';
import project3 from '../images/graphql-project.png';
import project4 from '../images/typescript-react-shopppingApp.png';

export default function Projects() {
  return (
    <div id="projects" className="projects">
      <h1>Personal Projects</h1>
      <div className="projects-container">
        <div className='project'>
        <a
          href="https://w-mallak-movieapp.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <img src={project1} alt="project" />
          <div className="project-name">MOVIE APP</div>
          <p className="project-description">
            A fully functional web app providing information about movies from
            OMDB/TMDB APIs.{' '}
          </p>
        </a>
        </div>
        <div className='project'>
        <a
          href="https://github.com/William8421/EV-Connection/"
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
        </div>
        <div className='project'>
        <a
          href="https://shopping-app-typescript.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={project4} alt="project" />
          <div className="project-name">
           SHOPPING-CART APP
          </div>
          <p className="project-description">
            A frontend typescript-react app to add or remove shopping items to/from the cart
          </p>
        </a>
        </div>
        <div className='project'>
        <a
          href="https://github.com/William8421/MusicBandsGraphQl"
          target="_blank"
          rel="noreferrer"
        >
          <img src={project3} alt="project" />
          <div className="project-name"> PLAYLIST APP </div>
          <p className="project-description">
            A fullstack app created with GraphQL-React to add songs and singers/bands to the
            music playlist. listening to the songs will be added soon{' '}
          </p>
        </a>
        </div>
      </div>
    </div>
  );
}
