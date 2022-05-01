import '../scss/projects.scss';
import { projectReact } from '../data/projectsObj';

function Projects() {
  const cnt = 0;
  const project = projectReact[cnt];
  const {
    cover,
    thumbnail,
    title,
    description,
    tags,
    link,
  } = project;
  return (
    <section className="projects--container">
      <div className="project-thumbnail-full">
        <img alt="" src={cover} />
      </div>
      <div className="project-miniature">
        <img alt="" src={thumbnail} className="cover--display" />
        <div className="miniature--title">
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
        <div className="miniature--details">
          <small>{tags.map((i) => i)}</small>
          <a href={link}>see +</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
