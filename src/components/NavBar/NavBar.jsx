import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <header>
            <h1>Maga.Mic</h1>
            <nav>
                <ul>
                    <li>Acerca de mí</li>
                    <li>Servicios y Productos</li>
                    <li>Contacto</li>
                </ul>
            </nav>

            <CartWidget/>
        </header>
    )
}

export default NavBar
