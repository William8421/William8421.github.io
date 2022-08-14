import project1 from '../images/image.jpg';

export default function Projects() {
  return (
    <div id='projects' className='projects' >
      <h1>Personal Projects</h1>
      <div className='projects-container'>
    <a href='https://inspiring-zabaione-8b997a.netlify.app/' target='_blank' rel="noreferrer" ><img src={project1} alt='project' />Movie App</a>    
    <a href='https://inspiring-zabaione-8b997a.netlify.app/' target='_blank' rel="noreferrer" ><img src={project1} alt='project' />Signup/Signin App</a>    
    <a href='https://inspiring-zabaione-8b997a.netlify.app/' target='_blank' rel="noreferrer" ><img src={project1} alt='project' />Final Project</a>   
    </div>
    </div>
  )
}
