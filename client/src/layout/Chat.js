import { useState } from "react";
import { BsFacebook,BsChatDotsFill , BsInstagram, BsTwitter } from "react-icons/bs";



export default function Chat() {

    const [open,setOpen] = useState(false)

    const togglechat = () => {
        setOpen(!open)
        console.log(open)
    }



  return (
    <div className='float-right mr-4'>
        <button onClick={togglechat} className="text-lime-500 flex">
            <BsChatDotsFill className="w-8 h-8 mb-2"/>
        </button>
        
        <ul className={`p-0 m-0 list-none ${open ? 'block' : 'hidden'}  `}>
            <li><a className="text-lime-500 flex" href="http://m.me/restaurant.example?text=Hello%20Would you liek to order something?" ><BsFacebook className="w-8 h-8 mb-2"/></a></li>
            <li><a className="text-lime-500 flex" href="#"><BsInstagram className="w-8 h-8 mb-2"/></a></li>
            <li><a className="text-lime-500 flex" href="#"><BsTwitter className="w-8 h-8 mb-2"/></a></li>
        </ul>
    </div>
  )
}
