
import 'aos/dist/aos.css';
import AOS from "aos"
import { useEffect } from 'react';
import Image from 'next/image';


function Workspace({item,i}) {

    return (
        <div data-aos="zoom-in-up" >
              <div className=" cursor-pointer m-2  relative group ">
            <a href={item.link}>
              <div className="absolute inset-0  z-10  flex">
            
                <div className="absolute inset-0 group-hover:bg-black  group-hover:opacity-80 transition transform duration-300 ease-in">    </div>

                <div className="opacity-0 group-hover:opacity-100 font-semibold    text-white z-10 text-center mx-auto self-center">{item.title}
                <p className="text-xs text-gray-400">{item.description}</p>
                <div className="flex justify-center mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
</svg>
                </div>
               
                
                </div>
       
              </div>
              

              <img  src={item.pic} alt="" />
           
          
              
            </a>
          </div>
        </div>
    )
}

export default Workspace