import Logo from "./Logo";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

import Chat from "./Chat";

const Footer = () => {
    return (
        <footer className="fixed botom-0 bg-zinc-800 w-full p-4">
            <Chat/>
        </footer>
      
      );
}
 
export default Footer;