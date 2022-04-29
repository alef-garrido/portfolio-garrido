import PropTypes from 'prop-types';
import { AiOutlineCloseSquare } from 'react-icons/ai';

function MobileMenu(props) {
  const { clickHandler } = props;
  return (
    <div className="mobile--menu">
      <button
        type="button"
        className="menu--mobile-closeBttn"
        onClick={clickHandler}
      >
        <AiOutlineCloseSquare />
      </button>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </div>
  );
}

MobileMenu.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default MobileMenu;
