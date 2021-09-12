import Image from "next/image"
import { useState } from "react";

function Contact() {


    const[message,Setmessage]=useState();



function sendEmail(e){
  e.preventDefault();
  if(message){

  emailjs.sendForm('service_0npr1tp', 'template_0y40xrj', e.target, 'user_jEjOgW8OernmoSOdtSYdH')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
    Setmessage(" ");
  }
}

    return (
        <div
        id="contact" 
        className="h-auto py-12 w-full contact grid  lg:px-32 md:grid-cols-2 items-center">
          
            <div className="relative h-96 w-96 hidden md:flex">
                <Image src="/contact.png" layout="fill" objectFit="contain"/>
            </div>

            <div className="flex justify-center ">

            <form   onSubmit={sendEmail}>
        <h1 className="text-white font-medium label">Name *</h1>
        <input
          className="h-12 w-96 input outline-none border-none text-gray-300"
          type="text" name="name"
        />
        <h1 className="text-white font-medium label">Email *</h1>
        <input
          className="h-12 w-96 input outline-none border-none text-gray-300"
          type="text" name="email"
        />
        <h1 className="text-white font-medium label">Message *</h1>
        <textarea
          className="h-48 flex items-start w-96  text-gray-300 input outline-none border-none"
          type="text" name="message"  
          value={message} onChange={(e)=>Setmessage(e.target.value)}
        />

        <button  type="submit"  value="sendmessage" className="bg-black text-white px-7 py-4 uppercase font-semibold 
        hover:bg-white hover:text-black cursor-pointer rounded-sm
         transition transform duration-300 ease-in  mt-5">
          Submit
        </button>
        
      </form>

            </div>
            
        </div>
    )
}

export default Contact
