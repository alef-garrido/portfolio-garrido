import '../scss/projects.scss';
import cover1 from '../assets/thumbnails/thumbnail-1.jpg';

function Projects() {
  return (
    <section className="projects--container">
      <div className="project-thumbnail-full" />
      <div className="project-miniature">
        <img alt="" src={cover1} className="cover--display" />
        <div className="miniature--title">
          <h5>Title</h5>
          <p>This is a paragraph wit info</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
