import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="navBarContainer">
        <h3 className="navBarContainer--btn" onClick={() => navigate("/")}>
          DLC
        </h3>

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
