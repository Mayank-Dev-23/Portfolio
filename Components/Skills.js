import Bar from "./Bar"

const skill=[
    {title:"Reactjs", width:"384px"},
    {title:"Html5", width:"350px"},
    {title:"Git" , width:"240px"},
    {title:"Redux" ,width:"280px"},
    {title:"Java script", width:"340px"},
    {title:"Css", width:"320px"},
    {title:"Figma", width:"250px"},
]

function Skills() {
    return (
        <div className="h-auto w-full pt-10  p-10 md:p-0 " id="skills">
<div className="flex flex-col  items-center pt-10 px-4 ">
            <h1 className="text-2xl uppercase">Skills</h1>
            <div className="h-1 w-32 bg-black  "></div>
           <p className="pt-8 skillhead font1">My Programming Language Proficiency</p>
            </div>

<div className="flex   items-center flex-col   sm:shadow-xl  mt-10 ">
    {skill.map((item,index)=>(
        <Bar  key={index} item={item}/>
    ))}
</div>
          

         
            
            
        </div>
    )
}

export default Skills
