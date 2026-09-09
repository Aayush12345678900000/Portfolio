type HeroProps = {
    name : string
    tagline : string
    description : string
}
function Hero({ name, tagline, description }: HeroProps) {
  return(
    <div className="flex flex-col items-center justify-center text-center bg-black min-h-screen">
        <h1 className="font-extrabold text-white text-4xl" >{name}</h1>
        <h2 className="text-blue-500 text-xl mt-2 font-semibold">{tagline}</h2>
        <p className="font-bold text-gray-300 text-lg mt-2 p-2 max-w-3xl">{description}</p>
        <div className="flex gap-4 mt-6">
            <a href="#projects" className="bg-blue-500 hover:bg-blue-600 transition-colors text-white font-semibold rounded-lg px-6 py-3 shadow-md">
              Explore My Work
            </a>
            <a href="/resume.pdf" download className="bg-gray-700 hover:bg-gray-600 transition-colors text-white font-semibold rounded-lg px-6 py-3 shadow-md border border-gray-600">
              Download Resume
            </a>
        </div>
    </div>
  )
}

export default Hero