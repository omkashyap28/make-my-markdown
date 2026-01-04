import { FaGithub, FaLightbulb } from "react-icons/fa6";
import Button from './Button';

const Header = () => {
  return (
    <header className="montserrat">
      <div className="header">
        <h2>
          MakeMyMarkdown
        </h2>
        <div className="flex-gap-1">
          <a
            href="https://github.com/omkashyap28/make-my-markdown"
            className="page-links"
          >
            <FaGithub className="icons" />
          </a>
        </div>
      </div>
      <div>

      </div>
    </header>
  );
};

export default Header;