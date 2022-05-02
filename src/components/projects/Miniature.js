import PropTypes from 'prop-types';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import '../../scss/projNav.scss';

function Miniature(props) {
  const {
    data, previous, next, index, size,
  } = props;
  const {
    thumbnail,
    title,
    description,
    tags,
    link,
  } = data;
  return (
    <div className="project-miniature">

      <img alt="" src={thumbnail} className="cover--display" />
      <div className="miniature--title">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
      <div className="miniature--details">
        <small>{tags.map((i) => i)}</small>
        <a
          href={link}
          target="_blank"
          rel="noreferrer noopener"
        >
          See repo here
        </a>
      </div>
      <div
        className="projects--nav"
      >
        <button
          type="button"
          onClick={previous}
          className={index === 0 ? 'hide' : null}
        >
          <BsArrowLeftCircle />
        </button>
        <button
          type="button"
          onClick={next}
          className={index === size - 1 ? 'hide' : null}
        >
          <BsArrowRightCircle />
        </button>
      </div>
    </div>
  );
}

Miniature.propTypes = {
  data: PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(
        PropTypes.string.isRequired,
      ).isRequired,
      link: PropTypes.string.isRequired,
    },
  ).isRequired,
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
};

export default Miniature;
