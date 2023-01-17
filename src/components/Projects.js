import project1 from '../images/image.jpg';
import project2 from '../images/finalProject.png';
import project3 from '../images/graphql-project.png';

export default function Projects() {
  return (
    <div id="projects" className="projects">
      <h1>Personal Projects</h1>
      <div className="projects-container">
        <a
          href="https://inspiring-zabaione-8b997a.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={project1} alt="project" />
          <div className="projectname">MOVIE APP</div>
          <p className="projectDescription">
            A fully functional web app providing information about movies from
            OMDB/TMDB APIs.{' '}
          </p>
        </a>
        <a
          href="https://github.com/William8421/MusicBandsGraphQl"
          target="_blank"
          rel="noreferrer"
        >
          <img src={project3} alt="project" />
          <div className="projectname"> Playlist App </div>
          <p className="projectDescription">
            An app created with GraphQL to add songs and singers/bands to the
            music playlist. listening to the songs will be added soon{' '}
          </p>
        </a>
        <a
          href="https://evconnection.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={project2} alt="project" />
          <div className="projectname">
            EV-<span>C</span>ONNECTION
          </div>
          <p className="projectDescription">
            An App, where EV drivers can charge their electrical vehicles just
            by connecting to wall-box owners in their surroundings.
          </p>
        </a>
      </div>
    </div>
  );
}
