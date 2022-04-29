function NavMenu() {
  return (
    <nav className="pageNav">
      <div className="nav--content">
        <div className="navMenu--container animate__animated animate__fadeIn">
          <ul>
            <li className="nav--link deco-current">
              <a href="#home">Home</a>
            </li>
            <li className="nav--link">
              <a href="#about">About Me</a>
            </li>
            <li className="nav--link last">
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;
