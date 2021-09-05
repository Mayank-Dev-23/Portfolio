import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa";
import Socialicon from "./Socialicon";
 
 
 function Footer() {
    return (
        <footer className="bg-black h-56  skillcolor">
               <div className="  social  flex justify-center space-x-5 pt-10 mb-9 ">
                  <Socialicon   Icon={FaFacebookF}  link={"https://www.facebook.com/mayank.saxena.37604303/"}/>
                  <Socialicon  Icon={FaInstagram}   link={"https://www.instagram.com/maynk_23/"}/>
                  <Socialicon  Icon={FaGithub}    link={"https://github.com/Mayank-Dev-23"}/>
                  
                </div>
                <div className="flex flex-col  items-center max-w-3xl mx-auto px-2">
                    <p className="social">Modified with love by  Mayank Saxena</p>
                    <p className="social mt-4 text-xs  lg:text-sm">© All credit goes to Mayank Saxena - Copyright 2021 Mayank Saxena ❤️</p>
                <p className="social text-xs">Design by Mayank</p>
                </div>
            
        </footer>
    )
}

export default Footer