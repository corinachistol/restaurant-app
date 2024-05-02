import { linkClass } from "./Nav"
import logo from './logo.png';

export default function Logo() {
  return (
     <a href="#" className={linkClass}>
        <img src={logo} alt="" className='h-12' />
    </a>
  )
}
