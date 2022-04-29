function NavContent() {
  return (
    <nav className="nav--container animate__animated animate__fadeIn">

      <ul className="navlist--container">
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

    </nav>
  );
}

export default NavContent;
