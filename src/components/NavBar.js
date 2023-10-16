import imagen from "../img/icono_usuario.png";
import imagen2 from "../img/rayo.jpg";

function NavBar({ onLogoClick, onProfileClick }) {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" onClick={() => onLogoClick()}>
            <img src={imagen2} alt="" width="30" height="24" />
            three pics
          </a>
          
            <a className="navbar-brand" href="#" onClick={() => onProfileClick()}>
              <img src={imagen} alt="" width="30" height="24" />
            </a>
          
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
