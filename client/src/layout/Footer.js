import Logo from "./Logo";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";


const Footer = () => {
    return (
        <footer className="bg-zinc-800">
            <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
                <div>
                    <div className="mx-auto my-6 text-center text-white md:hidden">
                        Copyright &copy; 2024, All Rights Reserved
                    </div>
                    <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
                        <Logo/>
                    </div>

                    <ul className="flex justify-center list-unstyled text-decoration-none space-x-4">
                        <li className="hover:no-underline">
                            <a href="#" className=""><BsTwitter /></a>
                        </li>
                        <li className="">
                            <a href="#" className=""><BsInstagram/></a>
                        </li>
                        <li className="">
                            <a href="#" className=""><BsFacebook/></a>
                        </li>
                    </ul>

                </div>
                <div className="flex justify-around space-x-32">
                    <div className="flex flex-col space-y-3 text-white">
                        <a href="" className="hover:text-zinc-400">Food</a>
                        <a href="" className="hover:text-zinc-400">Drinks</a>
                        <a href="" className="hover:text-zinc-400">Contacts</a>
                    </div>
               
                    <div className="flex flex-col space-y-3 text-white">
                        <a href="" className="hover:text-zinc-400">Home</a>
                        <a href="" className="hover:text-zinc-400">Careers</a>
                        <a href="" className="hover:text-zinc-400">About</a>
                    </div>
                
                </div>

                <div className="flex flex-col justify-between">
                    <form action="">
                        <div className="flex space-x-3">
                            <input type="text" 
                                className="flex-1 px-4 rounded-full focus:outline-none" 
                                placeholder="Updates in your inbox"/>
                            <button className="px-6 py-2 text-white rounded-full bg-zinc-900 hover:bg-white hover:text-zinc-900 focus:outline-none">
                                Go
                            </button>
                        </div>
                    </form>
                    <div className="hidden text-white md:-block">
                        Copyright &copy; 2024, All rigths reserved
                    </div>
                </div>
            </div>
        </footer>
      );
}
 
export default Footer;