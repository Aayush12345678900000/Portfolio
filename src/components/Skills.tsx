
const skills = [
    "React",
    "TypeScript",
    "Node.js",
    "Python"
]
function Skills(){
    return(
        <div className="bg-gray-950 p-4">
            <h2 className="text-white text-3xl font-bold text-center mb-6">Skills</h2>
            <div className="grid grid-cols-2 gap-4  max-w-2xl mx-auto rounded-lg p-8 text-white">
                {
                    skills.map((skill) => (
                        <div key={skill} className="bg-gray-700 p-4 rounded-lg">
                            {skill}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Skills;