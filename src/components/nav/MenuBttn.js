import PropTypes from 'prop-types';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

function MenuBttn(props) {
  const { clickHandler } = props;
  return (
    <button
      type="button"
      className="menu--mobile-bttn"
      onClick={clickHandler}
    >
      <HiOutlineMenuAlt4 />
    </button>
  );
}

MenuBttn.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default MenuBttn;
