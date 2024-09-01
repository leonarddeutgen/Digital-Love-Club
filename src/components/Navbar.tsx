import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

interface NavigationProps {
  toggleTheme: () => void;
}

export const Navbar = ({ toggleTheme }: NavigationProps) => {
  const navigate = useNavigate();
  return (
    <>
      <section className="navBarContainer">
        <DropdownButton id="dropdown-basic-button" title="Theme Mode">
          <Dropdown.Item href="#/action-1" onClick={() => toggleTheme()}>
            Light Mode
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={() => toggleTheme()}>
            Dark Mode
          </Dropdown.Item>
        </DropdownButton>

        {/* <div className="menu">
          <ul className="menu--list">
            <li>Home</li>
            <li>Playlists</li>
            <li>Contact</li>
          </ul>
        </div> */}
      </section>
    </>
  );
};
