import { NavLink } from 'react-router-dom';

function NavBar() {

    const navLinkStyles = ({ isActive }) =>
        isActive ? "nav-link active" : "nav-link";

    return (
        <header className="header">
            <h1 className='title'>Nathan Taylor</h1>
            <nav className='nav-bar'>
                <NavLink to='/' className={navLinkStyles}>About Me</NavLink>
                <NavLink to='portfolio' className={navLinkStyles}>Portfolio</NavLink>
                <NavLink to='contact' className={navLinkStyles}>Contact</NavLink>
            </nav>
        </header>
    );
}

export default NavBar;