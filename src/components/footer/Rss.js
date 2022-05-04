import {
  FaLinkedinIn, FaTwitter, FaGithub, FaAngellist,
} from 'react-icons/fa';

function Rss() {
  return (
    <div className="footer--rrss">
      <a
        href="https://www.linkedin.com/in/alef-g/"
        target="_blank"
        rel="noreferrer noopener"
        className="rrss--icon"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="https://github.com/alef-garrido"
        target="_blank"
        rel="noreferrer noopener"
        className="rrss--icon"
      >
        <FaGithub />
      </a>
      <a
        href="https://angel.co/u/armando-garrido"
        target="_blank"
        rel="noreferrer noopener"
        className="rrss--icon"
      >
        <FaAngellist />
      </a>
      <a
        href="https://twitter.com/Alef_Garrido"
        target="_blank"
        rel="noreferrer noopener"
        className="rrss--icon"
      >
        <FaTwitter />
      </a>
    </div>
  );
}

export default Rss;
