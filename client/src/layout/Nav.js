import './Nav.css'
import logo from './logo.png';
const Nav = () => {
    return ( 
        <nav className = "navbar">
            <a href="#">
                <img src={logo} alt="" />
            </a>

            <a href="#" className="text-3xl font-bold underline">Food</a>
            <a href="#">Drinks</a>
            <a href="#">Contacts</a>
            
        </nav>
     );
}
 
export default Nav;