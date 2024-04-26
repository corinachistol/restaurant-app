import { linkClass } from "./Nav";

const Footer = () => {
    return (
        <footer className="flex flex-wrap justify-between items-center py-3 my-4 border-t">
            <div className="flex flex-col items-center">
                <a href="" className="mb-3 text-zinc-400">
                    img brand
                </a>
            </div>
            <ul className="flex flex-col justify-end list-unstyled text-decoration-none">
                <li className="ms-3">
                    <a href="" className="text-zinc-400">twiter</a>
                </li>
                <li className="ms-3">
                    <a href="" className="text-zinc-400">instagram</a>
                </li>
                <li className="ms-3">
                    <a href="" className="text-zinc-400">facebook icon</a>
                </li>
            </ul>
        
        </footer>
      );
}
 
export default Footer;