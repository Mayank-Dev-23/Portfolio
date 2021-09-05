const links = [
    { title: "home", link: "home" },
    { title: "about", link: "about" },
    { title: "skills", link: "skills" },
    { title: "work", link: "work" },
    { title: "contact", link: "contact" },
  ];



function Dropdown() {
    return (
        <div className="">
            {links.map((item,index)=>(
                <h1 key={index}>{item.title}</h1>
            ))}
        </div>
    )
}

export default Dropdown
