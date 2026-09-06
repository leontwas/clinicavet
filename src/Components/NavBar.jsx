import { Link, NavLink } from "react-router-dom";
import "./NavBar.css"
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaBars, FaTimes } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "./firebaseConfig/AuthProvider"

const LogInLinks = ({ onLinkClick }) => {

    const User = useContext(AuthContext);
    const user = User.currentUser;
    const uid = user?.uid;
    const isUserLoggedIn = user !== null;

    if (!isUserLoggedIn) {
        return (
            <>
                <NavLink to="/login" className="nav-link nav-item" onClick={onLinkClick}>
                    <button id="botonIngresar" className="botonNavNoLogin">Ingresar</button>
                </NavLink>
                <NavLink to="/register" className="nav-link nav-item" onClick={onLinkClick}>
                    <button id="botonRegistrate" className="botonNavNoLogin">Registrate</button>
                </NavLink>
            </>
        );
    }

    else if (isUserLoggedIn && user.email == 'admin@gmail.com') {
        return (
            <>
                <NavLink to="/clientes" className="nav-link nav-item" onClick={onLinkClick}>Clientes</NavLink>
                <NavLink to="/turnos" className="nav-link nav-item" onClick={onLinkClick}>Turnos</NavLink>
                <NavLink to="/signOut" className="nav-link nav-item" onClick={onLinkClick}>
                    <button id="botonCerrarSesion" className="botonNavLogin">Cerrar Sesión</button>
                </NavLink>
            </>
        );
    }

    else {
        return (
            <>
                <NavLink to={`/misMascotas/${uid}`} className="nav-link nav-item" onClick={onLinkClick}>Mis Mascotas</NavLink>
                <NavLink to="/turnos" className="nav-link nav-item" onClick={onLinkClick}>Turnos</NavLink>      
                <NavLink to="/signOut" className="nav-link nav-item" onClick={onLinkClick}>
                    <button id="botonCerrarSesion" className="botonNavLogin">Cerrar Sesión</button>
                </NavLink>
                <NavLink to={`/perfil/${uid}`} className="nav-link nav-item nav-profile-icon" onClick={onLinkClick} aria-label="Perfil de usuario">
                    <CgProfile size={28} />
                </NavLink>
            </>
        );
    }
}

const NavBar = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);

    const cerrarMenu = () => setMenuAbierto(false);
    const toggleMenu = () => setMenuAbierto(prev => !prev);

    return (
        <nav className="navbar" id="navbar">
            <div className="navbar-container">
                <NavLink to="/" className="nav-link nav-item huellitas" onClick={cerrarMenu}>
                    <figure style={{ margin: 0 }}>
                        <img src="/logoBanco.png" alt="Logo RAMVET" className="logoBlanco" onError={(e) => { e.currentTarget.src = "/logoNegro.jpg"; }} />
                    </figure>
                    <span className="navbar-brand-text">Clínica RAMVET</span>
                </NavLink>

                <button 
                    className="navbar-toggler" 
                    type="button" 
                    onClick={toggleMenu} 
                    aria-label={menuAbierto ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
                    aria-expanded={menuAbierto}
                >
                    {menuAbierto ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>

                <div className={`nav-link-section ${menuAbierto ? "abierto" : ""}`}>
                    <NavLink to="/quienesSomos" className="nav-link nav-item" onClick={cerrarMenu}>Quiénes Somos</NavLink>
                    <NavLink to="/adopciones" className="nav-link nav-item" onClick={cerrarMenu}>Adopciones</NavLink>
                    <NavLink to="/consultas" className="nav-link nav-item" onClick={cerrarMenu}>Consultas</NavLink>
                    <LogInLinks onLinkClick={cerrarMenu} />
                    <div className="navbar-social-links">
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="nav-social-icon">
                            <BsInstagram size={20} />
                        </a>
                        <a href="https://es-la.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" className="nav-social-icon">
                            <BsFacebook size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default NavBar;