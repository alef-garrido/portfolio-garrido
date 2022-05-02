import '../scss/projects.scss';
import { SPAs } from '../data/projectsObj';
import Tags from './projects/Tags';
import Miniature from './projects/Miniature';

function Projects() {
  const cnt = 0;
  const project = SPAs[cnt];
  return (

    <section className="projects--content">
      <div className="project-thumbnail-full">
        <img alt="" src={project.cover} />
      </div>
      <Miniature data={project} />
      <Tags />
    </section>

  );
}

export default Projects;
