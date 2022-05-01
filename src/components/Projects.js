import '../scss/projects.scss';
import { projectReact } from '../data/projectsObj';
import Miniature from './projects/Miniature';

function Projects() {
  const cnt = 0;
  const project = projectReact[cnt];
  return (

    <section className="projects--content">
      <div className="project-thumbnail-full">
        <img alt="" src={project.cover} />
      </div>
      <Miniature data={project} />
    </section>

  );
}

export default Projects;
