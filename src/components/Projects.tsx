 const projects = [
  {
    title: "AI Plant Disease Detection",
    description: "Detects plant diseases from leaf images."
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React."
  },
  {
    title: "Task Manager",
    description: "Desktop application for task management."
  },
  {
    title: "Weather App",
    description: "Shows weather using an API."
  }
]

import {useState} from "react"
 function Projects(){
    const [show, setShow] = useState(false);
    return(
        
        <div className="bg-gray-950 flex justify-center items-center flex-col gap-4 p-8">
            <h2 className="text-3xl text-white text-center mb-6 font-bold">Projects</h2>
            <div className="grid grid-cols-2 gap-4 mx-auto max-w-3xl p-8">
              {
                 (show ? projects : projects.slice(0, 2)).map((project, index)=> (
                    <div key={index} className="flex flex-col gap-3 bg-gray-700 p-4 rounded-lg">
                        <h3 className="text-white"> Project {index + 1}</h3>
                        <h2 className="text-white">{project.title}</h2>
                        <p className="text-gray-300">{project.description}</p>
                    </div>
                ))
              }   
            </div>
            <button className="bg-blue-400 text-yellow-200 rounded-lg p-2" onClick={()=>setShow(!show)}>{
                show ? "View Less" : "View More"
            }</button>
        </div>
    )
 }

 export default Projects;
