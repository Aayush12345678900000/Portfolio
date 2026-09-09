import { useState } from "react";
function Contactform(){
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    return (
        <div className="bg-gray-900 py-12 px-6">
            <h4 className="text-3xl text-white font-bold text-center mb-6">Send a Message</h4>
            <form 
            className="flex flex-col gap-4 max-w-md mx-auto" 
            onSubmit={(e)=>{
                    e.preventDefault();
                    alert(`Message sent by ${name} (${email})!`);
                    setName("");
                    setEmail("");
                 }}>
                 
                <input 
                 className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
                 type="text"
                 value ={name}
                 onChange={e => setName(e.target.value)}
                 placeholder="Your Name"
                 required
                 />
                <input 
                 className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
                 type="email"
                 value={email}
                 onChange={e => setEmail(e.target.value)}
                 placeholder="Your Email"
                 required
                />
                <button 
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 transition-colors text-white font-semibold py-3 px-6 rounded-lg mt-2"
                >
                  Send Message
                </button>
            </form>
        </div>
    );
}

export default Contactform;