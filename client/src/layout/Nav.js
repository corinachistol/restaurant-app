// import './Nav.css'
import Logo from './Logo';


export const linkClass =
	'flex flex-row items-center font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base ml-3'

const Nav = () => {
    return ( 
        <nav className = " bg-zinc-800 flex item-center">
           <Logo />
            <div className='flex flex-row ml-auto mr-3'>

                <a href="#" className={linkClass}>Food</a>
                <a href="#" className={linkClass}>Drinks</a>
                <a href="#" className={linkClass}>Contacts</a>
            </div>
            
        </nav>
     );
}
 
export default Nav;