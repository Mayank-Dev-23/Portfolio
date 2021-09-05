import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import {Link} from "react-scroll"

const links = [
  { title: "home", link: "home" },
  { title: "about", link: "about" },
  { title: "skills", link: "skills" },
  { title: "work", link: "work" },
  { title: "contact", link: "contact" },
];

function Header() {
  const [nav, Setnav] = useState(false);

  useEffect(() => {
    const change = () => {
      if (window.scrollY >= 10) {
        Setnav(true);
      } else {
        Setnav(false);
      }
    };
    window.addEventListener("scroll", change);
    return () => window.removeEventListener("scroll", change);
  }, []);
  return (
    
    <div
      className={
        !nav
          ? "justify-center space-x-10  p-1 w-full absolute top-0 left-0 z-50 h-10 md:flex hidden  "
          : " justify-center space-x-10  p-1 w-full fixed top-0 left-0 z-50 h-10  md:flex hidden   back text-white shadow-md"
      }
    >
   
      {links.map((item, index) => (
        <Link 
        activeClass="active"
        to={item.link}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        key={index}
        
        
        
        >
        <p
          key={index}
          className="uppercase p-1 cursor-pointer rounded-sm  font-normal  hover:bg-white hover:text-black"
        >
          {item.title}
        </p>
        </Link>
      ))}
   



    </div>

   
    
  );
}

export default Header;
