import Image from "next/image";

function About() {
  return (
    <div 
    id="about"
    className="h-auto w-full    pt-20 grid grid-cols-1 sm:grid-cols-2 px-7 md:px-10 lg:px-32 mx-w-4xl mx-auto about ">
      <div className="relative md:h-3/4 md:w-80  sm:flex  sm:h-32 sm:w-32  hidden">
        <Image src="/mayank.jpg" layout="fill" objectFit="cover" 
        className="sm:rounded-full md:rounded-sm  shadow-lg"/>
      </div>
      <div className="shadow-lg p-4 mb-10 rounded-md">
        <h1 className="text-semibold uppercase text-2xl text-white">About me</h1>
        <p className= "pt-4  text-md  ">
          My name is Mayank, I'm a Full Stack ReactJS Developer and web designer focused on clean &
          user-friendly experiences, I am passionate about building excellent
          websites that improves the lives of those around me.
        </p>
        <div className="pt-10">
            <h1 className="text-xl text-white  uppercase text-semibold">Contact Details</h1>
            <div className="pt-4 text-md" >
            <p >Mayank Saxena</p>
            <p >Hathras</p>
            <p  >Uttar Pradesh, 204101</p>
            
            <p >saxenam572@gmail.com</p>
            </div>
        </div>
        <a href="/resume.pdf" download="pic">
        <button className=" px-24 py-4 text-white mt-10  mb-10 shadow-xl rounded-sm
        hover:bg-white  hover:text-black transition duration-200 ease-in cursor-pointer
        
        ">Download</button></a>



      </div>
    </div>
  );
}

export default About;
