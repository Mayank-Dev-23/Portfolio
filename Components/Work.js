const project = [
    {
      title: "Facebook Clone",
      link: "https://facebook-beta.vercel.app/",
      pic: "/facebook.png",
      description: "'Facebook Clone built with Reactjs'",
    },
    {
      title: "Digital Resume",
      link: "https://portfolio-delta-cyan-27.vercel.app/",
      pic: "/portfolio.png",
      description: "'Digital Resume built with Reactjs'",
    },
    {
      title: "Airbnb",
      link: "https://airbnb-zeta.vercel.app/",
      pic: "/Airbnb.png",
      description: "'Airbnb clone built with Next js and Tailwindcss'",
    },
  
  ];
  

  import Workspace from "./Workspace";
  import AOS from "aos";
  import 'aos/dist/aos.css';

  
  function Works() {

    return (
      <div className="h-auto pb-32 px-11  lg:px-96   bg-gray-200 " id="work">
        <div className="py-10 flex items-center justify-center" >
          <h1  data-aos="fade-left" className="text-xl  font-normal  uppercase">Check out some of my projects</h1>
        </div>
        <div className="flex flex-col sm:grid  sm:grid-cols-2 "  >
          {project.map((item, i) => (
  
            <Workspace key={i} item={item} />
            
          ))}
        </div>
      </div>
    );
  }
  
  export default Works;