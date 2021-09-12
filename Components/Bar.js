import AOS from "aos";
import "aos/dist/aos.css";

function Bar({item}) {
    return (
        <div className="flex flex-col  ">
            <h1 className="mb-3 uppercase font1 skillcolor">{item.title}</h1>
            <div className="bg-gray-300 h-10 w-96  relative   mb-10 rounded-sm" >
            <div 
            data-aos="fade"
            className=" bar  h-10  absolute  rounded-sm  "  style={{width:item.width}}></div>

            </div>
           
            
        </div>
    )
}

export default Bar
