import '../scss/projects.scss';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useState, useEffect } from 'react';
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
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (

    <section id="projects" className="projects--content">
      <div className="project-thumbnail-full" data-aos="fade-down">
        <img alt="" src={project.cover} />
      </div>
      <Miniature
        data={project}
        previous={previous}
        next={next}
        index={index.count}
        size={index.assets.length}
        data-aos="fade-down"
      />
      <Tags />
    </section>

  );
}

export default Projects;
