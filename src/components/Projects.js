import '../scss/projects.scss';
import { useState } from 'react';
import { SPAs } from '../data/projectsObj';
import Tags from './projects/Tags';
import Miniature from './projects/Miniature';

function Projects() {
  const [index, setIndex] = useState({
    count: 0,
    assets: SPAs,
  });
  const project = index.assets[index.count];
  const previous = () => {
    setIndex((prevState) => ({
      ...prevState,
      count: prevState.count - 1,
    }));
  };
  const next = () => {
    setIndex((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    }));
  };
  return (

    <section className="projects--content">
      <div className="project-thumbnail-full">
        <img alt="" src={project.cover} />
      </div>
      <Miniature
        data={project}
        previous={previous}
        next={next}
        index={index.count}
        size={index.assets.length}
      />
      <Tags />
    </section>

  );
}

export default Projects;
