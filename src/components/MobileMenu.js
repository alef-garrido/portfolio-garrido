import PropTypes from 'prop-types';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import logo from '../assets/logo.svg';

function MobileMenu(props) {
  const { clickHandler } = props;
  return (
    <div className="mobile--menu">
      <div className="mobile--header">
        <img alt="" src={logo} />
        <button
          type="button"
          className="menu--mobile-closeBttn"
          onClick={clickHandler}
        >
          <AiOutlineCloseSquare />
        </button>
      </div>
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
        <li>
          <a href="#footer">Connect with Me</a>
        </li>
      </ul>
    </div>
  );
}

MobileMenu.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default MobileMenu;
