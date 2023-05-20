import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import navBtnImg from './Navbar_btn.png'
import navBtnClose from './Navbar_btn_cierre.png'
import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'

const NavBar = () => {

    // El estado empieza en false porque el menú empieza cerrado
    const [openNavbar, setOpenNavbar] = useState(false)

    const openMenu = () => {
        setOpenNavbar(prevState => !prevState);
    };

    return (

        <header>

            <Link to={"/"}>
                <h1 className='title'>Maga.Mic</h1>
            </Link>

            <div className="navbar-right">

                <nav className={openNavbar ? 'open' : ''}>
                    <button className="navbar-close" onClick={openMenu}>
                        <img className="navbar-close--img" src={navBtnClose} alt="Boton de cruz para cerrar NavBar" />
                    </button>
                    <ul>
                        <li><NavLink to={`/category/Astrology`}>Astrology</NavLink></li>
                        <li><NavLink to={`/category/DiceAndRunes`}>DiceAndRunes</NavLink></li>
                        <li><NavLink to={`/category/Event`}>Event</NavLink></li>
                        <li><NavLink to={`/category/Products`}>Products</NavLink></li>
                        <li><NavLink to={`/category/Workshops`}>Workshops</NavLink></li>
                        <li><NavLink to={`/category/Tarot`}>Tarot</NavLink></li>
                    </ul>
                </nav>

                <button className="navbar-btn" onClick={openMenu}>
                    <img className="navbar-btn--img" src={navBtnImg} alt="Mano sosteniendo tres cartas de tarot" />
                </button>

                <CartWidget />

            </div>

        </header>
    )
}

export default NavBar
