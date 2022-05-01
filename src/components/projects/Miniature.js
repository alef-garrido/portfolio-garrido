import PropTypes from 'prop-types';

function Miniature(props) {
  const { data } = props;
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
    </div>
  );
}

Miniature.propTypes = {
  data: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default Miniature;
