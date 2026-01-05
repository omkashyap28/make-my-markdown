import { FaGear, FaGithub } from "react-icons/fa6";
import Button from './Button';

const Header = () => {
  return (
    <header className="montserrat">
      <div className="header">
        <h2>
          MakeMyMarkdown
        </h2>
        <div className="flex-gap-1">
          <label htmlFor="sync-scroll">
            <input type="checkbox" id="sync-scroll" />
            Sync-scroll
          </label>
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
    </header >
  );
};

export default Header;