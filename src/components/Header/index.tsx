import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="nav-container">
      <a href="/">
        <img src={logo} />
      </a>
      <ul>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
