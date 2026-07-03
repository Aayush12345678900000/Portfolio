import { useState } from "react";
function Contactform(){
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    return (
        <div>
            <h4>Contact Me</h4>
            <form 
            className="flex flex-col" 
            onSubmit={(e)=>{
                    e.preventDefault();
                    alert(`Name: ${name}, Email: ${email}`);
                 }}>
                 
                <input 
                 type="text"
                 value ={name}
                 onChange={e => setName(e.target.value)}
                 placeholder="Enter your Name"
                 />
                <input 
                 type="email"
                 value={email}
                 onChange={e => setEmail(e.target.value)}
                 placeholder="Enter your Email"
                />
                <button type="submit">Submit</button>
                
            </form>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>
    );
}

export default Contactform;