import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useNavigate } from "react-router-dom";

interface NavigationProps {
  toggleTheme: () => void;
}

export const Navbar = ({ toggleTheme }: NavigationProps) => {
  const navigate = useNavigate();
  return (
    <>
      <article className="navBarContainer">
        <section>
          <h3 onClick={() => navigate("/")}>DLC</h3>
        </section>
        <section>
          <DropdownButton id="dropdown-basic-button" title="Theme Mode">
            <Dropdown.Item href="#/action-1" onClick={() => toggleTheme()}>
              Light Mode
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2" onClick={() => toggleTheme()}>
              Dark Mode
            </Dropdown.Item>
          </DropdownButton>
        </section>
      </article>
    </>
  );
};
