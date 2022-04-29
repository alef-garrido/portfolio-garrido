import { useState } from 'react';
import MobileMenu from './MobileMenu';
import MenuBttn from './MenuBttn';

function NavMenu() {
  const [display, setDisplay] = useState(false);
  const clickHandler = () => {
    setDisplay((prevState) => !prevState);
  };
  return (
    <nav className="nav--mobile-container">
      {
        display
          ? <MobileMenu clickHandler={clickHandler} />
          : <MenuBttn clickHandler={clickHandler} />
      }
    </nav>
  );
}

export default NavMenu;
