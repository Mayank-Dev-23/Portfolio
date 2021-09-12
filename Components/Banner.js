import Image from "next/image";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaArrowDown,
  FaBars,
} from "react-icons/fa";
import Socialicon from "./Socialicon";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {Link} from "react-scroll"

const links = [
  { title: "home", link: "home" },
  { title: "about", link: "about" },
  { title: "skills", link: "skills" },
  { title: "work", link: "work" },
  { title: "contact", link: "contact" },
];

function Banner({open,toogle}) {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div className="relative h-screen home " id="home">
     
      {/* <Image src="/background1.jpg" layout="fill" objectFit="cover" /> */}

      <div className="relative flex justify-center items-center h-full px-20 flex-col  banner  ">
        {/* <h1 className="text-6xl lg:text-7xl uppercase font-semibold ">i'm mayank saxena</h1> */}
        <h1
          data-aos="fade-up"
          className="text-6xl lg:text-7xl uppercase font-semibold  z-10 "
        >
          I'm
        </h1>
        <div className="flex text-6xl lg:text-7xl uppercase font-semibold  z-10  shadow-2xl">
          <h1 data-aos="fade-left">m</h1>
          <h1 data-aos="fade-right">a</h1>
          <h1 data-aos="fade-up">y</h1>
          <h1 data-aos="fade-down">a</h1>
          <h1 data-aos="fade-up-left">n</h1>
          <h1 data-aos="fade-up-left">k</h1>
        </div>
        <div className="flex text-6xl lg:text-7xl uppercase  font-semibold z-10 ">
          <h1 data-aos="fade-rigth">s</h1>
          <h1 data-aos="fade-left">a</h1>
          <h1 data-aos="fade-down">x</h1>
          <h1 data-aos="fade-up">e</h1>
          <h1 data-aos="fade-up-right">n</h1>
          <h1 data-aos="fade-up-left">a</h1>
        </div>
        <div   data-aos="fade-up" className="flex   space-x-5 items-center mt-5 lg:space-x-7    ">
          <Socialicon
            Icon={FaFacebookF}
            link={"https://www.facebook.com/mayank.saxena.37604303/"}
          />
          <Socialicon
            Icon={FaInstagram}
            link={"https://www.instagram.com/maynk_23/"}
          />
          <Socialicon
            Icon={FaGithub}
            link={"https://github.com/Mayank-Dev-23"}
          />
        </div>


        <Link 
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
       
        
        
        
        >
        <div className="relative top-32 bg-black p-2 rounded-full animate-bounce cursor-pointer hover:bg-white group
        transition transform duration-300 ease-in
        ">
            <  FaArrowDown  size="1.7rem" className="text-white  group-hover:text-black" />
        </div>
        </Link>
        <div data-aos="fade-left"
        onClick={toogle}
        className=" top-4 fixed z-40 dropdown p-2 rounded-full right-4 cursor-pointer md:hidden">
        <FaBars size="1.7rem" />
      </div>
      <div className={ !open ? "fixed top-20 right-10  back p-8  z-50 rounded-md md:hidden shadow-lg": "hidden"}>
     
        {links.map((item, index)=>(
           <Link 
           activeClass="active"
           to={item.link}
           spy={true}
           smooth={true}
           offset={-70}
           duration={500}
      
           onClick={toogle}
           
           
           >
          <h1  key={index} className="p-2  cursor-pointer rounded-sm  font-normal  text-white hover:bg-white hover:text-black transition duration-200 ease-in "
           key={index}>{item.title}</h1>
           </Link>
        ))}
   
      </div>
      </div>

     
    </div>
  );
}

export default Banner;
